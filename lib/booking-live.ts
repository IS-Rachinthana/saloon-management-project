import { BookingRequestStatus } from "@prisma/client";

import { prisma } from "@/lib/prisma";
import type { BookingService, BranchBookingData } from "@/lib/booking-data";

export type BookingSectionData = {
  branches: BranchBookingData[];
  services: BookingService[];
  times: string[];
  defaultDate: string;
};

const BOOKING_TIMES = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];
const ACTIVE_BOOKING_STATUSES: BookingRequestStatus[] = ["PENDING", "SUBMITTED", "APPROVED"];

const callNowCodes = new Set(["0111", "0114"]);
const packageCodes = new Set(["0112"]);

function formatCurrency(value: number, category: BookingService["category"]) {
  if (category === "call_now") {
    return "Call Now";
  }

  return `LKR ${value.toLocaleString("en-LK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

function formatDuration(value: number | null | undefined) {
  if (!value) {
    return "Custom";
  }

  return `${value} Minutes`;
}

function formatBreak(value: number | null | undefined) {
  if (value === 0) {
    return "No Break Time";
  }

  if (!value) {
    return "Custom";
  }

  return `${value} Minutes`;
}

function inferCategory(code: string): BookingService["category"] {
  if (packageCodes.has(code)) {
    return "package";
  }

  if (callNowCodes.has(code)) {
    return "call_now";
  }

  return "standard";
}

function inferNotes(code: string) {
  if (code === "0104") {
    return ["According to the product quality, the massage price will be changed."];
  }

  if (code === "0111") {
    return [
      "Call Now button should be used instead of direct online checkout.",
      "Customized packages and prices are manually entered by the salon owner."
    ];
  }

  if (code === "0112") {
    return [
      "01st of month: 1st Cleanup",
      "15th of month: 2nd Cleanup",
      "25th of month: 3rd Facial",
      "29th of month: Hair Cut and Bread Cut"
    ];
  }

  if (code === "0114") {
    return [
      "Call Now button should be used for scheduling.",
      "Salon owner enters custom package details and price manually."
    ];
  }

  if (code === "0115") {
    return [
      "Head massage with oil - 15 minutes",
      "Steaming your hair - 10 minutes",
      "Wash your hair - 10 minutes"
    ];
  }

  return undefined;
}

export async function getBookingSectionData(): Promise<BookingSectionData> {
  const [branches, services] = await Promise.all([
    prisma.branch.findMany({
      where: { isActive: true },
      orderBy: { name: "asc" },
      include: {
        employees: {
          include: {
            employee: {
              include: {
                user: true
              }
            }
          }
        },
        bookingRequests: {
          where: {
            status: {
              in: ACTIVE_BOOKING_STATUSES
            }
          },
          include: {
            assignedEmployee: {
              include: {
                user: true
              }
            },
            services: true
          }
        }
      }
    }),
    prisma.service.findMany({
      where: { isActive: true },
      orderBy: { code: "asc" },
      include: {
        subItems: {
          orderBy: { code: "asc" }
        },
        branches: {
          where: {
            isVisible: true
          },
          orderBy: {
            priceLkr: "asc"
          }
        }
      }
    })
  ]);

  const branchData: BranchBookingData[] = branches.map((branch) => ({
    id: branch.slug,
    name: branch.name,
    stylists: branch.employees.map(({ employee }) => ({
      id: employee.id,
      name: employee.user.fullName,
      role: employee.jobTitle ?? "Hairdresser",
      image: employee.user.avatarUrl ?? "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
    })),
    bookings: branch.bookingRequests
      .filter((booking) => booking.assignedEmployeeId)
      .map((booking) => ({
        date: booking.bookingDate.toISOString().slice(0, 10),
        time: booking.bookingTime,
        stylistId: booking.assignedEmployeeId ?? "",
        serviceName: booking.services[0]?.serviceName ?? "Salon Service",
        customerName: booking.customerName
      }))
  }));

  const serviceData: BookingService[] = services.map((service) => {
    const category = inferCategory(service.code ?? "");
    const branchPrice = service.branches[0]?.priceLkr ? Number(service.branches[0].priceLkr) : 0;

    return {
      id: service.code ?? service.id,
      code: service.code ?? service.slug.toUpperCase(),
      name: service.name,
      description: service.description ?? "Service details will be shared during booking confirmation.",
      price: category === "standard" && service.code === "0104"
        ? `From ${formatCurrency(branchPrice, "standard")}`
        : formatCurrency(branchPrice, category),
      startAm: "9.00 AM",
      endPm: category === "package" || category === "call_now" || (service.code ?? "") === "0110" ? "6.00 PM" : "7.00 PM",
      duration: formatDuration(service.durationMinutes),
      breakTime: formatBreak(service.bufferMinutes),
      category,
      notes: inferNotes(service.code ?? ""),
      subItems: service.subItems.length
        ? service.subItems.map((subItem) => ({
            id: subItem.id,
            code: subItem.code,
            name: subItem.name,
            description: subItem.description ?? "Package sub item",
            price:
              packageCodes.has(service.code ?? "") && Number(subItem.priceLkr ?? 0) === 0
                ? "Included"
                : formatCurrency(Number(subItem.priceLkr ?? 0), "standard"),
            duration: formatDuration(subItem.durationMinutes),
            breakTime: formatBreak(subItem.breakMinutes),
            timing: subItem.timingNotes ?? undefined
          }))
        : undefined
    };
  });

  return {
    branches: branchData,
    services: serviceData,
    times: BOOKING_TIMES,
    defaultDate: new Date().toISOString().slice(0, 10)
  };
}
