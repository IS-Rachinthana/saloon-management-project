import { NextResponse } from "next/server";
import { BookingRequestStatus } from "@prisma/client";

import { prisma } from "@/lib/prisma";

const ACTIVE_BOOKING_STATUSES: BookingRequestStatus[] = ["PENDING", "SUBMITTED", "APPROVED"];
const allowedStatuses: BookingRequestStatus[] = ["PENDING", "SUBMITTED", "APPROVED", "REJECTED", "CANCELLED"];

type UpdateBookingPayload = {
  status?: BookingRequestStatus;
  assignedEmployeeId?: string | null;
  note?: string;
};

export async function PATCH(
  request: Request,
  context: { params: Promise<{ bookingId: string }> }
) {
  try {
    const { bookingId } = await context.params;
    const body = (await request.json()) as UpdateBookingPayload;

    const booking = await prisma.bookingRequest.findUnique({
      where: { id: bookingId },
      include: {
        branch: {
          include: {
            employees: {
              include: {
                employee: true
              }
            }
          }
        }
      }
    });

    if (!booking) {
      return NextResponse.json({ error: "Booking request not found." }, { status: 404 });
    }

    const nextStatus = body.status ?? booking.status;
    const nextAssignedEmployeeId =
      body.assignedEmployeeId === undefined ? booking.assignedEmployeeId : body.assignedEmployeeId;

    if (!allowedStatuses.includes(nextStatus)) {
      return NextResponse.json({ error: "Selected booking status is invalid." }, { status: 400 });
    }

    if (nextAssignedEmployeeId) {
      const branchHasStylist = booking.branch.employees.some(
        ({ employee }) => employee.id === nextAssignedEmployeeId
      );

      if (!branchHasStylist) {
        return NextResponse.json({ error: "Selected hairdresser does not belong to this branch." }, { status: 400 });
      }

      if (ACTIVE_BOOKING_STATUSES.includes(nextStatus)) {
        const existingConflict = await prisma.bookingRequest.findFirst({
          where: {
            id: { not: booking.id },
            branchId: booking.branchId,
            assignedEmployeeId: nextAssignedEmployeeId,
            bookingDate: booking.bookingDate,
            bookingTime: booking.bookingTime,
            status: {
              in: ACTIVE_BOOKING_STATUSES
            }
          }
        });

        if (existingConflict) {
          return NextResponse.json(
            { error: "That hairdresser is already booked for this date and time." },
            { status: 409 }
          );
        }
      }
    }

    const updatedBooking = await prisma.bookingRequest.update({
      where: { id: booking.id },
      data: {
        status: nextStatus,
        assignedEmployeeId: nextAssignedEmployeeId ?? null,
        statusHistory: {
          create: {
            status: nextStatus,
            note: body.note?.trim() || `Booking updated from admin dashboard to ${nextStatus}.`
          }
        }
      }
    });

    return NextResponse.json({
      ok: true,
      bookingId: updatedBooking.id,
      status: updatedBooking.status,
      assignedEmployeeId: updatedBooking.assignedEmployeeId
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Booking update failed. Please try again." },
      { status: 500 }
    );
  }
}
