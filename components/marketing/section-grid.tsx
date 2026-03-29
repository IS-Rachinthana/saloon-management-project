"use client";

import {
  BellRing,
  CalendarClock,
  LayoutDashboard,
  MessageCircleHeart,
  Store,
  UsersRound
} from "lucide-react";

import { BookingSection } from "@/components/marketing/booking-section";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

const platformIcons = [LayoutDashboard, CalendarClock, UsersRound, Store, BellRing, MessageCircleHeart];

export function SectionGrid() {
  const { language } = useLanguage();
  const content = translations[language];
  const lookbookGradients = [
    "from-[#7d5a50] via-[#d8b08c] to-[#f6efe5]",
    "from-[#3b2d2f] via-[#7c6052] to-[#e7d9ca]",
    "from-[#5d4b66] via-[#c7a6b4] to-[#f0e5df]"
  ];

  return (
    <div className="space-y-24 pb-24">
      <section className="shell">
        <div className="glass-panel overflow-hidden p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.32em] text-brand-ember">{content.showcase.eyebrow}</p>
              <h2 className="section-title">{content.showcase.title}</h2>
              <p className="section-copy">{content.showcase.description}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {content.showcase.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[24px] border border-brand-ink/10 bg-brand-ink px-5 py-6 text-brand-sand">
                  <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">{metric.label}</p>
                  <p className="mt-3 text-lg font-semibold">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="shell space-y-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-brand-ember">{content.services.eyebrow}</p>
          <h2 className="section-title">{content.services.title}</h2>
          <p className="section-copy">{content.services.description}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.services.items.map((service) => (
            <article key={service.title} className="card p-6">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-ink/70">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="offers" className="shell">
        <div className="card overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-brand-ink p-8 text-brand-sand sm:p-10">
              <p className="text-xs uppercase tracking-[0.32em] text-brand-gold">{content.offers.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{content.offers.title}</h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-brand-sand/75">{content.offers.description}</p>
            </div>
            <div className="grid gap-4 bg-white/65 p-8 sm:p-10">
              {content.offers.items.map((offer) => (
                <div key={offer} className="rounded-[24px] border border-brand-ink/10 bg-brand-mist/70 p-5 text-sm leading-7 text-brand-ink/80">
                  {offer}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-brand-ember">{content.signatureExperience.eyebrow}</p>
          <h2 className="section-title">{content.signatureExperience.title}</h2>
          <p className="section-copy">{content.signatureExperience.description}</p>
        </div>
        <div className="grid gap-4">
          {content.signatureExperience.steps.map((step, index) => (
            <article key={step.title} className="glass-panel p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-ink text-brand-sand">
                  <span className="text-sm font-semibold">0{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-ink/70">{step.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell space-y-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-brand-ember">{content.team.eyebrow}</p>
          <h2 className="section-title">{content.team.title}</h2>
          <p className="section-copy">{content.team.description}</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {content.team.members.map((member, index) => (
            <article key={member.name} className="glass-panel overflow-hidden p-0">
              <div className={cn("h-52 bg-gradient-to-br", lookbookGradients[index % lookbookGradients.length])} />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-brand-ember">{member.role}</p>
                <h3 className="mt-3 text-2xl font-semibold">{member.name}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-ink/70">{member.specialty}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell space-y-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-brand-ember">{content.lookbook.eyebrow}</p>
          <h2 className="section-title">{content.lookbook.title}</h2>
          <p className="section-copy">{content.lookbook.description}</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-panel overflow-hidden p-4">
            <div className="grid h-full min-h-[420px] gap-4 md:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[28px] bg-gradient-to-br from-[#5a463d] via-[#b88963] to-[#efe3d7] p-6 text-white">
                <p className="text-xs uppercase tracking-[0.24em] text-white/75">{content.lookbook.items[0]?.title}</p>
                <p className="mt-4 max-w-xs text-3xl font-semibold leading-tight">{content.lookbook.items[0]?.detail}</p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-[28px] bg-gradient-to-br from-[#2e2327] via-[#6a4d49] to-[#ddcab5] p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/75">{content.lookbook.items[1]?.title}</p>
                  <p className="mt-4 text-lg leading-8">{content.lookbook.items[1]?.detail}</p>
                </div>
                <div className="rounded-[28px] bg-gradient-to-br from-[#5c4a63] via-[#b18da0] to-[#efe2db] p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/75">{content.lookbook.items[2]?.title}</p>
                  <p className="mt-4 text-lg leading-8">{content.lookbook.items[2]?.detail}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {content.lookbook.items.map((item, index) => (
              <article key={item.title} className="card p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-brand-ember">Look 0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-ink/70">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />

      <section id="platform" className="shell space-y-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-brand-ember">{content.platform.eyebrow}</p>
          <h2 className="section-title">{content.platform.title}</h2>
          <p className="section-copy">{content.platform.description}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.platform.items.map((item, index) => {
            const Icon = platformIcons[index];

            return (
              <article key={item.title} className="card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sand text-brand-ember">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-ink/70">{item.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="branches" className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-brand-ember">{content.branches.eyebrow}</p>
          <h2 className="section-title">{content.branches.title}</h2>
          <p className="section-copy">{content.branches.description}</p>
        </div>
        <div className="grid gap-5">
          {content.branches.items.map((branch) => (
            <article key={branch.name} className="card p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold">{branch.name}</h3>
                <span className="rounded-full bg-brand-sand px-3 py-1 text-xs uppercase tracking-[0.25em] text-brand-leaf">{branch.hours}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-brand-ink/70">{branch.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell">
        <div className="card p-8 sm:p-10">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.32em] text-brand-ember">{content.dashboardPreview.eyebrow}</p>
            <h2 className="section-title">{content.dashboardPreview.title}</h2>
            <p className="section-copy">{content.dashboardPreview.description}</p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {content.dashboardPreview.cards.map((card) => (
              <article key={card.title} className="rounded-[24px] border border-brand-ink/10 bg-white/80 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-brand-ember">{card.title}</p>
                <p className="mt-4 text-3xl font-semibold">{card.metric}</p>
                <p className="mt-4 text-sm leading-7 text-brand-ink/70">{card.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell space-y-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-brand-ember">{content.testimonials.eyebrow}</p>
          <h2 className="section-title">{content.testimonials.title}</h2>
          <p className="section-copy">{content.testimonials.description}</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {content.testimonials.items.map((item) => (
            <article key={item.name} className="glass-panel p-6">
              <p className="text-lg leading-8 text-brand-ink/85">“{item.quote}”</p>
              <div className="mt-6 border-t border-brand-ink/10 pt-4">
                <p className="font-semibold text-brand-ink">{item.name}</p>
                <p className="text-sm text-brand-ink/60">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell">
        <div className="overflow-hidden rounded-[36px] bg-brand-ink px-8 py-10 text-brand-sand shadow-glow sm:px-10 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-brand-gold">{content.bookingCta.eyebrow}</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">{content.bookingCta.title}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-sand/75">{content.bookingCta.description}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/book"
                  className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-medium text-brand-ink transition hover:bg-brand-sand"
                >
                  {content.bookingCta.primary}
                </a>
                <a
                  href="/book"
                  className="inline-flex items-center justify-center rounded-full border border-brand-sand/20 px-6 py-3 text-sm font-medium text-brand-sand transition hover:border-brand-gold hover:text-brand-gold"
                >
                  {content.bookingCta.secondary}
                </a>
              </div>
            </div>
            <div className="grid gap-3">
              {content.bookingCta.notes.map((note) => (
                <div key={note} className="rounded-[22px] border border-brand-sand/12 bg-white/10 px-4 py-4 text-sm text-brand-sand/85">
                  {note}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
