import { NextResponse } from "next/server";
import { BookingRequestStatus, Prisma } from "@prisma/client";

import { prisma } from "@/lib/prisma";

const ACTIVE_BOOKING_STATUSES: BookingRequestStatus[] = ["PENDING", "SUBMITTED", "APPROVED"];

type BookingPayload = {
  branchId?: string;
  serviceId?: string;
  stylistId?: string | null;
  subItemIds?: string[];
  bookingDate?: string;
  bookingTime?: string;
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  notes?: string;
};

function isValidDateString(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BookingPayload;
    const {
      branchId,
      serviceId,
      stylistId,
      subItemIds = [],
      bookingDate,
      bookingTime,
      customerName,
      customerPhone,
      customerEmail,
      notes
    } = body;

    if (!branchId || !serviceId || !bookingDate || !bookingTime || !customerName || !customerPhone) {
      return NextResponse.json({ error: "Please complete the required booking details." }, { status: 400 });
    }

    if (!isValidDateString(bookingDate)) {
      return NextResponse.json({ error: "Booking date format is invalid." }, { status: 400 });
    }

    const [branch, service] = await Promise.all([
      prisma.branch.findUnique({
        where: { id: branchId },
        include: {
          employees: {
            include: {
              employee: true
            }
          }
        }
      }),
      prisma.service.findUnique({
        where: { id: serviceId },
        include: {
          branches: {
            where: { branchId, isVisible: true }
          },
          subItems: {
            where: { id: { in: subItemIds.length ? subItemIds : ["__none__"] } }
          }
        }
      })
    ]);

    if (!branch) {
      return NextResponse.json({ error: "Selected branch was not found." }, { status: 404 });
    }

    if (!service) {
      return NextResponse.json({ error: "Selected service was not found." }, { status: 404 });
    }

    if (stylistId) {
      const branchHasStylist = branch.employees.some(({ employee }) => employee.id === stylistId);

      if (!branchHasStylist) {
        return NextResponse.json({ error: "Selected hairdresser does not belong to this branch." }, { status: 400 });
      }

      const existingBooking = await prisma.bookingRequest.findFirst({
        where: {
          branchId,
          assignedEmployeeId: stylistId,
          bookingDate: new Date(`${bookingDate}T00:00:00.000Z`),
          bookingTime,
          status: {
            in: ACTIVE_BOOKING_STATUSES
          }
        }
      });

      if (existingBooking) {
        return NextResponse.json(
          { error: "This hairdresser is already booked for the selected date and time." },
          { status: 409 }
        );
      }
    }

    if (subItemIds.length > 0 && service.subItems.length !== subItemIds.length) {
      return NextResponse.json({ error: "One or more selected sub items are invalid." }, { status: 400 });
    }

    const branchPrice = service.branches[0]?.priceLkr
      ? new Prisma.Decimal(service.branches[0].priceLkr)
      : new Prisma.Decimal(0);

    const bookingRequest = await prisma.bookingRequest.create({
      data: {
        branchId,
        assignedEmployeeId: stylistId || null,
        bookingDate: new Date(`${bookingDate}T00:00:00.000Z`),
        bookingTime,
        customerName: customerName.trim(),
        customerPhone: customerPhone.trim(),
        customerEmail: customerEmail?.trim() || null,
        notes: notes?.trim() || null,
        status: "SUBMITTED",
        services: {
          create: {
            serviceId: service.id,
            serviceCode: service.code,
            serviceName: service.name,
            priceSnapshot: branchPrice,
            durationMinutes: service.durationMinutes,
            breakMinutes: service.bufferMinutes,
            category: service.code
          }
        },
        statusHistory: {
          create: {
            status: "SUBMITTED",
            note: "Booking submitted from the public booking page."
          }
        }
      },
      include: {
        services: true
      }
    });

    if (service.subItems.length > 0 && bookingRequest.services[0]) {
      await prisma.bookingRequestSubItem.createMany({
        data: service.subItems.map((subItem) => ({
          bookingRequestServiceId: bookingRequest.services[0].id,
          serviceSubItemId: subItem.id,
          subItemCode: subItem.code,
          subItemName: subItem.name,
          priceSnapshot: subItem.priceLkr ?? new Prisma.Decimal(0),
          durationMinutes: subItem.durationMinutes,
          breakMinutes: subItem.breakMinutes
        }))
      });
    }

    return NextResponse.json({
      ok: true,
      bookingRequestId: bookingRequest.id,
      message: "Booking submitted successfully."
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Booking submission failed. Please try again."
      },
      { status: 500 }
    );
  }
}
