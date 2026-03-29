import Link from "next/link";
import { ArrowLeft, CalendarCheck2, Scissors } from "lucide-react";

import { BookingSection } from "@/components/marketing/booking-section";
import { getBookingSectionData } from "@/lib/booking-live";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function BookPage() {
  const bookingData = await getBookingSectionData();

  return (
    <main className="min-h-screen pb-20 pt-8">
      <section className="shell">
        <div className="glass-panel p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-ink text-brand-sand shadow-glow">
                <Scissors className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-brand-ember">Salon Booking</p>
                <h1 className="text-2xl font-semibold text-brand-ink">Saloon Hair Warna</h1>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-ink/10 bg-white/80 px-5 py-3 text-sm font-medium text-brand-ink transition hover:border-brand-ember hover:text-brand-ember"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to site
              </Link>
              <div className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-sand px-5 py-3 text-sm font-medium text-brand-ink">
                <CalendarCheck2 className="h-4 w-4 text-brand-ember" />
                Dedicated booking page
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10">
        <BookingSection initialData={bookingData} />
      </div>
    </main>
  );
}
