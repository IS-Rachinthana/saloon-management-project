import { BookingAdmin } from "@/components/dashboard/booking-admin";
import { getDashboardBookings } from "@/lib/dashboard-live";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AppointmentsPage() {
  const bookings = await getDashboardBookings();

  return (
    <main className="min-h-screen bg-[#f6efe5] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <BookingAdmin initialBookings={bookings} />
      </div>
    </main>
  );
}
