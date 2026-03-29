"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, CheckCircle2, CircleX, LoaderCircle, Save, Scissors, UserRound } from "lucide-react";

import type { DashboardBooking } from "@/lib/dashboard-live";
import { cn } from "@/lib/utils";

type BookingAdminProps = {
  initialBookings: DashboardBooking[];
};

type EditableBookingState = {
  status: DashboardBooking["status"];
  assignedEmployeeId: string | null;
};

const statusOptions: DashboardBooking["status"][] = [
  "PENDING",
  "SUBMITTED",
  "APPROVED",
  "REJECTED",
  "CANCELLED"
];

function formatStatus(status: string) {
  return status.toLowerCase().replaceAll("_", " ");
}

export function BookingAdmin({ initialBookings }: BookingAdminProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [bookingStates, setBookingStates] = useState<Record<string, EditableBookingState>>(
    Object.fromEntries(
      initialBookings.map((booking) => [
        booking.id,
        {
          status: booking.status,
          assignedEmployeeId: booking.stylistId
        }
      ])
    )
  );
  const [feedback, setFeedback] = useState<Record<string, { type: "error" | "success"; message: string }>>({});

  const summary = useMemo(
    () => ({
      pending: Object.values(bookingStates).filter((booking) => booking.status === "SUBMITTED" || booking.status === "PENDING")
        .length,
      assigned: Object.values(bookingStates).filter((booking) => Boolean(booking.assignedEmployeeId)).length,
      packages: initialBookings.filter((booking) => booking.subItems.length > 0).length,
      branches: new Set(initialBookings.map((booking) => booking.branchName)).size
    }),
    [bookingStates, initialBookings]
  );

  const setBookingState = (bookingId: string, value: Partial<EditableBookingState>) => {
    setFeedback((current) => {
      const next = { ...current };
      delete next[bookingId];
      return next;
    });

    setBookingStates((current) => ({
      ...current,
      [bookingId]: {
        ...current[bookingId],
        ...value
      }
    }));
  };

  const saveBooking = (booking: DashboardBooking, overrides?: Partial<EditableBookingState>) => {
    const state = {
      ...bookingStates[booking.id],
      ...overrides
    };

    startTransition(async () => {
      try {
        const response = await fetch(`/api/bookings/${booking.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            status: state.status,
            assignedEmployeeId: state.assignedEmployeeId
          })
        });

        const result = (await response.json()) as { error?: string };

        if (!response.ok) {
          setFeedback((current) => ({
            ...current,
            [booking.id]: {
              type: "error",
              message: result.error ?? "Update failed."
            }
          }));
          return;
        }

        setBookingStates((current) => ({
          ...current,
          [booking.id]: state
        }));

        setFeedback((current) => ({
          ...current,
          [booking.id]: {
            type: "success",
            message: "Booking updated successfully."
          }
        }));

        router.refresh();
      } catch (error) {
        console.error(error);
        setFeedback((current) => ({
          ...current,
          [booking.id]: {
            type: "error",
            message: "Update failed."
          }
        }));
      }
    });
  };

  return (
    <div className="space-y-6">
      <section className="rounded-[30px] border border-brand-ink/10 bg-white/75 p-6 shadow-glow sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.32em] text-brand-ember">Live booking monitor</p>
            <h1 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              Incoming client bookings in one admin queue
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-brand-ink/70">
              Review live bookings, assign the right stylist, and move requests through approval without leaving the
              dashboard.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full bg-brand-sand px-4 py-3 text-sm text-brand-ink">
              {initialBookings.length} total booking request{initialBookings.length === 1 ? "" : "s"}
            </div>
            <a
              href="/book"
              className="inline-flex items-center gap-2 rounded-full bg-brand-ink px-5 py-3 text-sm font-medium text-brand-sand transition hover:bg-brand-ember"
            >
              <Scissors className="h-4 w-4" />
              Open public booking page
            </a>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SummaryCard label="Pending review" value={summary.pending} icon={<LoaderCircle className="h-5 w-5 text-brand-ember" />} />
        <SummaryCard label="Assigned stylists" value={summary.assigned} icon={<UserRound className="h-5 w-5 text-brand-ember" />} />
        <SummaryCard label="Active branches" value={summary.branches} icon={<CalendarDays className="h-5 w-5 text-brand-ember" />} />
        <SummaryCard label="Package selections" value={summary.packages} icon={<Scissors className="h-5 w-5 text-brand-ember" />} />
      </section>

      <section className="grid gap-5">
        {initialBookings.map((booking) => {
          const state = bookingStates[booking.id];
          const message = feedback[booking.id];

          return (
            <article
              key={booking.id}
              className="rounded-[28px] border border-brand-ink/10 bg-white/80 p-5 shadow-glow sm:p-6"
            >
              <div className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr_0.9fr]">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-brand-sand px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-brand-ember">
                      {booking.bookingDate}
                    </span>
                    <span className="rounded-full bg-brand-sand px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-brand-ember">
                      {booking.bookingTime}
                    </span>
                    <span className="rounded-full bg-brand-ink px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-brand-sand">
                      {formatStatus(state.status)}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-brand-ink">{booking.customerName}</h2>
                    <p className="mt-1 text-sm text-brand-ink/65">{booking.branchName}</p>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <InfoBlock label="Phone" value={booking.customerPhone} />
                    <InfoBlock label="Email" value={booking.customerEmail ?? "Not provided"} />
                    <InfoBlock
                      label="Service"
                      value={`${booking.serviceCode ? `${booking.serviceCode} - ` : ""}${booking.serviceName}`}
                    />
                    <InfoBlock label="Current stylist" value={booking.stylistName} />
                  </div>

                  {booking.subItems.length ? (
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-brand-ember">Package selections</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {booking.subItems.map((item) => (
                          <span
                            key={`${booking.id}-${item.code ?? item.name}`}
                            className="rounded-full bg-brand-sand px-3 py-1.5 text-xs text-brand-ink"
                          >
                            {item.code ? `${item.code} - ` : ""}
                            {item.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {booking.notes ? (
                    <div className="rounded-[22px] border border-brand-ink/10 bg-brand-mist/70 p-4 text-sm text-brand-ink/70">
                      {booking.notes}
                    </div>
                  ) : null}
                </div>

                <div className="space-y-4 rounded-[24px] border border-brand-ink/10 bg-brand-mist/60 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-brand-ember">Assign hairdresser</p>
                  <select
                    value={state.assignedEmployeeId ?? ""}
                    onChange={(event) =>
                      setBookingState(booking.id, {
                        assignedEmployeeId: event.target.value || null
                      })
                    }
                    className="w-full rounded-[18px] border border-brand-ink/10 bg-white px-4 py-3 text-sm outline-none"
                  >
                    <option value="">Any available stylist</option>
                    {booking.availableStylists.map((stylist) => (
                      <option key={stylist.id} value={stylist.id}>
                        {stylist.name} - {stylist.role}
                      </option>
                    ))}
                  </select>

                  <p className="text-xs uppercase tracking-[0.22em] text-brand-ember">Change status</p>
                  <select
                    value={state.status}
                    onChange={(event) =>
                      setBookingState(booking.id, {
                        status: event.target.value as DashboardBooking["status"]
                      })
                    }
                    className="w-full rounded-[18px] border border-brand-ink/10 bg-white px-4 py-3 text-sm outline-none"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {formatStatus(status)}
                      </option>
                    ))}
                  </select>

                  <button
                    type="button"
                    onClick={() => saveBooking(booking)}
                    disabled={isPending}
                    className={cn(
                      "inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-brand-sand transition",
                      isPending ? "bg-brand-ink/60" : "bg-brand-ink hover:bg-brand-ember"
                    )}
                  >
                    <Save className="h-4 w-4" />
                    Save changes
                  </button>
                </div>

                <div className="space-y-4 rounded-[24px] border border-brand-ink/10 bg-white/90 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-brand-ember">Quick actions</p>

                  <button
                    type="button"
                    onClick={() => saveBooking(booking, { ...state, status: "APPROVED" })}
                    disabled={isPending}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-700"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Approve booking
                  </button>

                  <button
                    type="button"
                    onClick={() => saveBooking(booking, { ...state, status: "REJECTED" })}
                    disabled={isPending}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-rose-700"
                  >
                    <CircleX className="h-4 w-4" />
                    Reject booking
                  </button>

                  {message ? (
                    <p
                      className={cn(
                        "rounded-[18px] px-4 py-3 text-sm",
                        message.type === "success"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-rose-50 text-rose-700"
                      )}
                    >
                      {message.message}
                    </p>
                  ) : (
                    <p className="rounded-[18px] bg-brand-mist/60 px-4 py-3 text-sm text-brand-ink/65">
                      Update status or reassign the stylist, then save directly from this card.
                    </p>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
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

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[18px] border border-brand-ink/10 bg-white/80 p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-brand-ember">{label}</p>
      <p className="mt-2 text-sm text-brand-ink/75">{value}</p>
    </div>
  );
}
