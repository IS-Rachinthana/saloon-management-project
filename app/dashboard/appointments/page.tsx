import Link from "next/link";
import { CalendarDays, Phone, Scissors, Store, UserRound, Waypoints } from "lucide-react";

import { getDashboardBookings } from "@/lib/dashboard-live";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function formatStatus(status: string) {
  return status.toLowerCase().replaceAll("_", " ");
}

export default async function AppointmentsPage() {
  const bookings = await getDashboardBookings();

  return (
    <main className="min-h-screen bg-[#f6efe5] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="rounded-[30px] border border-brand-ink/10 bg-white/75 p-6 shadow-glow sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.32em] text-brand-ember">Live booking monitor</p>
              <h1 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
                Incoming client bookings in one admin queue
              </h1>
              <p className="max-w-3xl text-sm leading-7 text-brand-ink/70">
                This page reads directly from Supabase so receptionists and managers can monitor new public booking
                requests, selected services, chosen stylists, branch demand, and package sub-items in real time.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-full bg-brand-sand px-4 py-3 text-sm text-brand-ink">
                {bookings.length} total booking request{bookings.length === 1 ? "" : "s"}
              </div>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-full bg-brand-ink px-5 py-3 text-sm font-medium text-brand-sand transition hover:bg-brand-ember"
              >
                <Scissors className="h-4 w-4" />
                Open public booking page
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <SummaryCard
            label="Pending review"
            value={bookings.filter((booking) => booking.status === "SUBMITTED" || booking.status === "PENDING").length}
            icon={<Waypoints className="h-5 w-5 text-brand-ember" />}
          />
          <SummaryCard
            label="Assigned stylists"
            value={bookings.filter((booking) => booking.stylistName !== "Any available stylist").length}
            icon={<UserRound className="h-5 w-5 text-brand-ember" />}
          />
          <SummaryCard
            label="Colombo + Kandy"
            value={new Set(bookings.map((booking) => booking.branchName)).size}
            icon={<Store className="h-5 w-5 text-brand-ember" />}
          />
          <SummaryCard
            label="Package selections"
            value={bookings.filter((booking) => booking.subItems.length > 0).length}
            icon={<CalendarDays className="h-5 w-5 text-brand-ember" />}
          />
        </section>

        <section className="rounded-[30px] border border-brand-ink/10 bg-white/80 p-4 shadow-glow sm:p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-brand-ink/10 text-left">
              <thead>
                <tr className="text-xs uppercase tracking-[0.24em] text-brand-ember">
                  <th className="px-4 py-4 font-medium">Date</th>
                  <th className="px-4 py-4 font-medium">Client</th>
                  <th className="px-4 py-4 font-medium">Branch</th>
                  <th className="px-4 py-4 font-medium">Service</th>
                  <th className="px-4 py-4 font-medium">Stylist</th>
                  <th className="px-4 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-ink/10">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="align-top">
                    <td className="px-4 py-5 text-sm text-brand-ink/75">
                      <div className="font-medium text-brand-ink">{booking.bookingDate}</div>
                      <div className="mt-1">{booking.bookingTime}</div>
                    </td>
                    <td className="px-4 py-5 text-sm text-brand-ink/75">
                      <div className="font-medium text-brand-ink">{booking.customerName}</div>
                      <div className="mt-2 inline-flex items-center gap-2">
                        <Phone className="h-4 w-4 text-brand-ember" />
                        {booking.customerPhone}
                      </div>
                      {booking.customerEmail ? <div className="mt-2 text-brand-ink/60">{booking.customerEmail}</div> : null}
                      {booking.notes ? <div className="mt-3 max-w-sm text-brand-ink/60">{booking.notes}</div> : null}
                    </td>
                    <td className="px-4 py-5 text-sm text-brand-ink/75">
                      <div className="font-medium text-brand-ink">{booking.branchName}</div>
                    </td>
                    <td className="px-4 py-5 text-sm text-brand-ink/75">
                      <div className="font-medium text-brand-ink">
                        {booking.serviceCode ? `${booking.serviceCode} - ` : ""}
                        {booking.serviceName}
                      </div>
                      {booking.subItems.length ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {booking.subItems.map((item) => (
                            <span
                              key={`${booking.id}-${item.code ?? item.name}`}
                              className="rounded-full bg-brand-sand px-3 py-1 text-xs text-brand-ink"
                            >
                              {item.code ? `${item.code} - ` : ""}
                              {item.name}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </td>
                    <td className="px-4 py-5 text-sm text-brand-ink/75">
                      <div className="font-medium text-brand-ink">{booking.stylistName}</div>
                      <div className="mt-1 text-brand-ink/60">{booking.stylistRole}</div>
                    </td>
                    <td className="px-4 py-5 text-sm">
                      <span className="inline-flex rounded-full bg-brand-ink px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-brand-sand">
                        {formatStatus(booking.status)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {!bookings.length ? (
              <div className="rounded-[24px] border border-dashed border-brand-ink/15 bg-brand-mist/50 p-8 text-sm text-brand-ink/70">
                No booking requests have been submitted yet.
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}

function SummaryCard({ label, value, icon }: { label: string; value: number; icon: React.ReactNode }) {
  return (
    <div className="rounded-[24px] border border-brand-ink/10 bg-white/75 p-5 shadow-glow">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-brand-ink/60">{label}</p>
        {icon}
      </div>
      <p className="mt-4 text-3xl font-semibold text-brand-ink">{value}</p>
    </div>
  );
}
