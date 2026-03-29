import { BookingRequestStatus } from "@prisma/client";

import { prisma } from "@/lib/prisma";

export type DashboardBooking = {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string | null;
  bookingDate: string;
  bookingTime: string;
  branchName: string;
  stylistName: string;
  stylistRole: string;
  serviceName: string;
  serviceCode: string | null;
  status: BookingRequestStatus;
  notes: string | null;
  subItems: { code: string | null; name: string }[];
  createdAt: string;
};

export async function getDashboardBookings(): Promise<DashboardBooking[]> {
  const bookings = await prisma.bookingRequest.findMany({
    orderBy: [{ bookingDate: "asc" }, { bookingTime: "asc" }, { createdAt: "desc" }],
    include: {
      branch: true,
      assignedEmployee: {
        include: {
          user: true
        }
      },
      services: {
        include: {
          selectedSubItems: true
        }
      }
    }
  });

  return bookings.map((booking) => {
    const primaryService = booking.services[0];

    return {
      id: booking.id,
      customerName: booking.customerName,
      customerPhone: booking.customerPhone,
      customerEmail: booking.customerEmail,
      bookingDate: booking.bookingDate.toISOString().slice(0, 10),
      bookingTime: booking.bookingTime,
      branchName: booking.branch.name,
      stylistName: booking.assignedEmployee?.user.fullName ?? "Any available stylist",
      stylistRole: booking.assignedEmployee?.jobTitle ?? "Unassigned",
      serviceName: primaryService?.serviceName ?? "Salon service",
      serviceCode: primaryService?.serviceCode ?? null,
      status: booking.status,
      notes: booking.notes,
      subItems:
        primaryService?.selectedSubItems.map((item) => ({
          code: item.subItemCode,
          name: item.subItemName
        })) ?? [],
      createdAt: booking.createdAt.toISOString()
    };
  });
}
