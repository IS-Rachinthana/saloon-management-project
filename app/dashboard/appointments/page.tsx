import { BookingAdmin } from "@/components/dashboard/booking-admin";
import { getDashboardBookings } from "@/lib/dashboard-live";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AppointmentsPage() {
  const bookings = await getDashboardBookings();

  return <BookingAdmin initialBookings={bookings} />;
}
