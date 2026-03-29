import Link from "next/link";
import { CalendarDays, Scissors, Settings2, UserRoundCog } from "lucide-react";

import { appointmentStatuses, managementNav } from "@/lib/data";

type DashboardShellProps = {
  title: string;
  eyebrow: string;
  description: string;
};

const queue = [
  { time: "09:30", client: "Ayesha Fernando", service: "Cut + Color", staff: "Naduni", state: "Confirmed" },
  { time: "10:45", client: "Madhavi Perera", service: "Hair Spa", staff: "Any stylist", state: "Pending" },
  { time: "12:00", client: "Shenal Jay", service: "Walk-in Styling", staff: "Kasun", state: "Checked In" }
];

const metrics = [
  { label: "Today’s revenue", value: "LKR 128,000" },
  { label: "Occupancy", value: "87%" },
  { label: "Leave requests", value: "4 pending" },
  { label: "Birthday campaign", value: "12 clients" }
];

export function DashboardShell({ title, eyebrow, description }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-[#f6efe5]">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="border-r border-brand-ink/10 bg-brand-ink px-6 py-8 text-brand-sand">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gold text-brand-ink">
              <Scissors className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Salon platform</p>
              <p className="text-lg font-semibold">Hair Warna</p>
            </div>
          </Link>

          <nav className="mt-10 space-y-2">
            {managementNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-sm text-brand-sand/80 transition hover:bg-white/10 hover:text-brand-sand"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="mt-10 rounded-[24px] border border-brand-sand/10 bg-white/10 p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-gold/80">Role model</p>
            <div className="mt-4 space-y-4 text-sm text-brand-sand/80">
              <div className="flex items-center gap-3">
                <UserRoundCog className="h-4 w-4 text-brand-gold" />
                Super Admin, Manager, Receptionist, Hairdresser, Client
              </div>
              <div className="flex items-center gap-3">
                <Settings2 className="h-4 w-4 text-brand-gold" />
                Branch-aware RBAC and modular permissions
              </div>
            </div>
          </div>
        </aside>

        <main className="p-4 sm:p-6 lg:p-8">
          <div className="rounded-[30px] border border-brand-ink/10 bg-white/70 p-6 shadow-glow sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.32em] text-brand-ember">{eyebrow}</p>
                <h1 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">{title}</h1>
                <p className="max-w-3xl text-sm leading-7 text-brand-ink/70">{description}</p>
              </div>
              <div className="flex items-center gap-3 rounded-full bg-brand-sand px-4 py-3 text-sm text-brand-ink">
                <CalendarDays className="h-4 w-4 text-brand-ember" />
                Live salon board for mobile, desktop, and TV mode
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-[24px] border border-brand-ink/10 bg-brand-mist p-5">
                  <p className="text-sm text-brand-ink/60">{metric.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-brand-ink">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
              <section className="rounded-[28px] border border-brand-ink/10 bg-white/80 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">Today’s Appointment Queue</h2>
                    <p className="mt-1 text-sm text-brand-ink/65">Prepared for branch selection, stylist assignment, and walk-in intake.</p>
                  </div>
                  <Link href="/dashboard/appointments" className="text-sm font-medium text-brand-ember">
                    View all
                  </Link>
                </div>

                <div className="mt-6 space-y-4">
                  {queue.map((item) => (
                    <div
                      key={`${item.time}-${item.client}`}
                      className="grid gap-4 rounded-[22px] border border-brand-ink/10 bg-brand-mist/80 p-4 md:grid-cols-[90px_1fr_140px_120px]"
                    >
                      <div className="text-lg font-semibold text-brand-ink">{item.time}</div>
                      <div>
                        <p className="font-medium text-brand-ink">{item.client}</p>
                        <p className="text-sm text-brand-ink/65">{item.service}</p>
                      </div>
                      <div className="text-sm text-brand-ink/70">{item.staff}</div>
                      <div className="inline-flex items-center justify-start rounded-full bg-white px-3 py-1 text-xs uppercase tracking-[0.24em] text-brand-ember">
                        {item.state}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[28px] border border-brand-ink/10 bg-brand-ink p-6 text-brand-sand">
                <h2 className="text-xl font-semibold">Status Pipeline</h2>
                <p className="mt-2 text-sm leading-7 text-brand-sand/70">
                  Core statuses for the booking engine, ready for lock-based availability rules and payment confirmation.
                </p>

                <div className="mt-6 grid gap-3">
                  {appointmentStatuses.map((status) => (
                    <div key={status} className="rounded-[18px] border border-brand-sand/10 bg-white/10 px-4 py-3 text-sm">
                      {status}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
