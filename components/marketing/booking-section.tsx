"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { CalendarDays, Clock3, PhoneCall, Scissors, Sparkles, Store } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import { bookingBranches, bookingServices, bookingTimes } from "@/lib/booking-data";
import type { BookingSectionData } from "@/lib/booking-live";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

type BookingSectionProps = {
  initialData?: BookingSectionData;
};

export function BookingSection({ initialData }: BookingSectionProps) {
  const { language } = useLanguage();
  const content = translations[language].booking;
  const branches = initialData?.branches ?? bookingBranches;
  const services = initialData?.services ?? bookingServices;
  const times = initialData?.times ?? bookingTimes;
  const defaultDate = initialData?.defaultDate ?? "2026-03-29";
  const [selectedBranchId, setSelectedBranchId] = useState(branches[0]?.id ?? "");
  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const [selectedServiceId, setSelectedServiceId] = useState(services[0]?.id ?? "");
  const [selectedTime, setSelectedTime] = useState(times[1] ?? times[0] ?? "09:00");
  const [selectedSubItems, setSelectedSubItems] = useState<string[]>([]);
  const [selectedStylistId, setSelectedStylistId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const selectedBranch = useMemo(
    () => branches.find((branch) => branch.id === selectedBranchId) ?? branches[0],
    [branches, selectedBranchId]
  );
  const selectedService = useMemo(
    () => services.find((service) => service.id === selectedServiceId) ?? services[0],
    [selectedServiceId, services]
  );

  const activeBookings = useMemo(
    () => (selectedBranch?.bookings ?? []).filter((booking) => booking.date === selectedDate && booking.time === selectedTime),
    [selectedBranch, selectedDate, selectedTime]
  );

  const availableStylists = useMemo(
    () => (selectedBranch?.stylists ?? []).filter((stylist) => !activeBookings.some((booking) => booking.stylistId === stylist.id)),
    [selectedBranch, activeBookings]
  );
  const chosenStylist = selectedBranch?.stylists.find((stylist) => stylist.id === selectedStylistId) ?? null;
  const chosenSubItems = selectedService?.subItems?.filter((item) => selectedSubItems.includes(item.id)) ?? [];

  useEffect(() => {
    setSelectedSubItems([]);
    setSubmitted(false);
  }, [selectedServiceId]);

  useEffect(() => {
    if (!selectedStylistId || !availableStylists.some((stylist) => stylist.id === selectedStylistId)) {
      setSelectedStylistId(availableStylists[0]?.id ?? null);
    }
  }, [availableStylists, selectedStylistId]);

  const toggleSubItem = (subItemId: string) => {
    setSubmitted(false);
    setSelectedSubItems((current) =>
      current.includes(subItemId) ? current.filter((item) => item !== subItemId) : [...current, subItemId]
    );
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (!selectedBranch || !selectedService) {
    return (
      <section id="booking" className="shell scroll-mt-28">
        <div className="glass-panel p-6 text-sm text-brand-ink/70">
          Booking data is loading. Please refresh the page in a moment.
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="shell scroll-mt-28 space-y-10">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.32em] text-brand-ember">{content.eyebrow}</p>
        <h2 className="section-title">{content.title}</h2>
        <p className="section-copy">{content.description}</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel p-6 sm:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm text-brand-ink/75">
              <span>{content.branchLabel}</span>
              <div className="relative">
                <Store className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-ember" />
                <select
                  value={selectedBranchId}
                  onChange={(event) => setSelectedBranchId(event.target.value)}
                  className="w-full rounded-[20px] border border-brand-ink/10 bg-white/80 py-3 pl-11 pr-4 outline-none"
                >
                  {branches.map((branch) => (
                    <option key={branch.id} value={branch.id}>
                      {branch.name}
                    </option>
                  ))}
                </select>
              </div>
            </label>

            <label className="grid gap-2 text-sm text-brand-ink/75">
              <span>{content.dateLabel}</span>
              <div className="relative">
                <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-ember" />
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(event) => setSelectedDate(event.target.value)}
                  className="w-full rounded-[20px] border border-brand-ink/10 bg-white/80 py-3 pl-11 pr-4 outline-none"
                />
              </div>
            </label>

            <label className="grid gap-2 text-sm text-brand-ink/75 md:col-span-2">
              <span>{content.serviceLabel}</span>
              <div className="relative">
                <Sparkles className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-ember" />
                <select
                  value={selectedServiceId}
                  onChange={(event) => setSelectedServiceId(event.target.value)}
                  className="w-full rounded-[20px] border border-brand-ink/10 bg-white/80 py-3 pl-11 pr-4 outline-none"
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.code} - {service.name} - {service.price}
                    </option>
                  ))}
                </select>
              </div>
            </label>

            {selectedService.subItems?.length ? (
              <div className="md:col-span-2 rounded-[24px] border border-brand-ink/10 bg-white/80 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-brand-ember">{content.subCategoryTitle}</p>
                <div className="mt-4 space-y-3">
                  {selectedService.subItems.map((subItem) => (
                    <label key={subItem.id} className="flex gap-3 rounded-[20px] border border-brand-ink/10 bg-brand-mist/70 p-4">
                      <input
                        type="checkbox"
                        checked={selectedSubItems.includes(subItem.id)}
                        onChange={() => toggleSubItem(subItem.id)}
                        className="mt-1 h-4 w-4 accent-[#1F1720]"
                      />
                      <div className="flex-1">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="font-medium text-brand-ink">
                              {subItem.code} - {subItem.name}
                            </p>
                            <p className="mt-1 text-sm text-brand-ink/70">{subItem.description}</p>
                          </div>
                          <div className="text-sm font-medium text-brand-ember">{subItem.price}</div>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2 text-xs text-brand-ink/60">
                          <span className="rounded-full bg-white px-3 py-1">{subItem.duration}</span>
                          <span className="rounded-full bg-white px-3 py-1">{subItem.breakTime}</span>
                          {subItem.timing ? <span className="rounded-full bg-white px-3 py-1">{subItem.timing}</span> : null}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="md:col-span-2">
              <p className="mb-3 text-sm text-brand-ink/75">{content.timeLabel}</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {times.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "rounded-[18px] border px-4 py-3 text-sm transition",
                      selectedTime === time
                        ? "border-brand-ink bg-brand-ink text-brand-sand"
                        : "border-brand-ink/10 bg-white/75 text-brand-ink"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-[26px] border border-brand-ink/10 bg-white/70 p-5">
            <div className="flex flex-wrap items-center gap-3 text-sm text-brand-ink/70">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-sand px-3 py-1.5">
                <Scissors className="h-4 w-4 text-brand-ember" />
                {selectedService.code}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-sand px-3 py-1.5">
                <Clock3 className="h-4 w-4 text-brand-ember" />
                {selectedTime}
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <InfoCard label={content.priceLabel} value={selectedService.price} />
              <InfoCard label={content.durationLabel} value={selectedService.duration} />
              <InfoCard label={content.breakLabel} value={selectedService.breakTime} />
              <InfoCard label={content.timeWindowLabel} value={`${selectedService.startAm} - ${selectedService.endPm}`} />
            </div>

            <div className="mt-5 rounded-[22px] bg-brand-mist/80 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-ember">{content.visibleDescription}</p>
              <p className="mt-2 text-sm leading-7 text-brand-ink/75">{selectedService.description}</p>
            </div>

            {selectedService.notes?.length ? (
              <div className="mt-4 rounded-[22px] border border-brand-gold/25 bg-brand-sand/70 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-brand-ember">
                  {selectedService.category === "package" ? content.packageNote : content.callNow}
                </p>
                <div className="mt-3 space-y-2 text-sm leading-7 text-brand-ink/75">
                  {selectedService.notes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
                {selectedService.category === "call_now" ? (
                  <a
                    href="https://wa.me/94770000000"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-ink px-5 py-3 text-sm font-medium text-brand-sand transition hover:bg-brand-ember"
                  >
                    <PhoneCall className="h-4 w-4" />
                    {content.callNow}
                  </a>
                ) : null}
              </div>
            ) : null}

          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-panel p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-brand-ember">{content.availabilityTitle}</p>
                <h3 className="mt-2 text-2xl font-semibold">{selectedBranch.name}</h3>
              </div>
              <div className="rounded-full bg-brand-sand px-4 py-2 text-sm text-brand-ink">{selectedTime}</div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-brand-ink">{content.availableNow}</p>
              {availableStylists.length ? (
                <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {availableStylists.map((stylist) => (
                    <article key={stylist.id} className="overflow-hidden rounded-[24px] border border-brand-ink/10 bg-white/80">
                      <Image
                        src={stylist.image}
                        alt={stylist.name}
                        width={600}
                        height={420}
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-4">
                        <p className="text-lg font-semibold">{stylist.name}</p>
                        <p className="mt-1 text-sm text-brand-ink/65">{stylist.role}</p>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedStylistId(stylist.id);
                            setSubmitted(false);
                          }}
                          className={cn(
                            "mt-4 w-full rounded-full px-4 py-2.5 text-sm font-medium transition",
                            selectedStylistId === stylist.id
                              ? "bg-brand-ember text-brand-sand"
                              : "bg-brand-ink text-brand-sand hover:bg-brand-ember"
                          )}
                        >
                          {content.chooseStylist}
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="mt-4 rounded-[22px] border border-brand-ink/10 bg-white/80 p-5 text-sm leading-7 text-brand-ink/70">
                  {content.noOneFree}
                </div>
              )}
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-sm font-medium text-brand-ink">{content.alreadyBooked}</p>
            <div className="mt-4 space-y-3">
              {activeBookings.length ? (
                activeBookings.map((booking) => {
                  const stylist = selectedBranch.stylists.find((item) => item.id === booking.stylistId);

                  return (
                    <article key={`${booking.stylistId}-${booking.time}`} className="rounded-[22px] border border-brand-ink/10 bg-white/80 p-4">
                      <div className="flex items-center gap-4">
                        {stylist ? (
                          <Image
                            src={stylist.image}
                            alt={stylist.name}
                            width={64}
                            height={64}
                            className="h-16 w-16 rounded-2xl object-cover"
                          />
                        ) : null}
                        <div>
                          <p className="font-semibold text-brand-ink">{stylist?.name}</p>
                          <p className="text-sm text-brand-ink/65">{booking.serviceName}</p>
                          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-brand-ember">
                            {content.bookedByLabel}: {booking.customerName}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })
              ) : (
                <article className="rounded-[22px] border border-brand-ink/10 bg-white/80 p-4 text-sm text-brand-ink/70">
                  {content.availableNow}: {selectedBranch.stylists.map((stylist) => stylist.name).join(", ")}
                </article>
              )}
            </div>

            <div className="mt-6 rounded-[22px] border border-brand-ink/10 bg-brand-mist/70 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-ember">{content.selectedItemsLabel}</p>
              <div className="mt-3 space-y-2 text-sm leading-7 text-brand-ink/70">
                <p>{chosenStylist ? `${chosenStylist.name} - ${chosenStylist.role}` : content.noOneFree}</p>
                {chosenSubItems.length ? (
                  chosenSubItems.map((item) => <p key={item.id}>{item.code} - {item.name} - {item.price}</p>)
                ) : (
                  <p>{selectedService.code} - {selectedService.name}</p>
                )}
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="mt-4 inline-flex rounded-full bg-brand-ink px-5 py-3 text-sm font-medium text-brand-sand transition hover:bg-brand-ember"
              >
                {content.submitLabel}
              </button>
              {submitted ? <p className="mt-4 text-sm text-brand-ember">{content.submitSuccess}</p> : null}
            </div>

            <p className="mt-6 text-sm leading-7 text-brand-ink/60">{content.backendReady}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[20px] border border-brand-ink/10 bg-brand-mist/70 p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-brand-ember">{label}</p>
      <p className="mt-2 text-sm font-medium text-brand-ink">{value}</p>
    </div>
  );
}
