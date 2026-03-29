"use client";

import Link from "next/link";
import Image from "next/image";

import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";

export function HeroSection() {
  const { language } = useLanguage();
  const content = translations[language].hero;

  return (
    <section className="shell relative grid gap-10 pb-20 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-16">
      <div className="soft-orb left-10 top-4 h-32 w-32 bg-brand-gold/35" />
      <div className="soft-orb right-20 top-24 h-28 w-28 bg-brand-ember/20" />
      <div className="space-y-8">
        <div className="inline-flex items-center rounded-full border border-brand-gold/30 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.32em] text-brand-ember">
          {content.eyebrow}
        </div>

        <div className="space-y-5">
          <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-brand-ink sm:text-6xl lg:text-7xl">
            {content.title} <span className="text-brand-ember">{content.highlight}</span>.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-brand-ink/70 sm:text-lg">{content.description}</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full bg-brand-ink px-6 py-3 text-sm font-medium text-brand-sand transition hover:bg-brand-ember"
          >
            {content.primaryCta}
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-full border border-brand-ink/15 bg-white/75 px-6 py-3 text-sm font-medium text-brand-ink transition hover:border-brand-ember hover:text-brand-ember"
          >
            {content.secondaryCta}
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {content.stats.map((item) => (
            <div key={item.label} className="glass-panel p-5">
              <p className="text-2xl font-semibold text-brand-ink">{item.value}</p>
              <p className="mt-2 text-sm text-brand-ink/70">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 rounded-[34px] bg-radial-brand blur-2xl" />
        <div className="glass-panel relative overflow-hidden p-4">
          <div className="grid-overlay overflow-hidden rounded-[28px] bg-brand-sand/40 p-3">
            <div className="relative overflow-hidden rounded-[26px]">
              <Image
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
                alt={content.imageAlt}
                width={1200}
                height={1400}
                className="h-[480px] w-full object-cover object-center"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-ink/75 via-brand-ink/30 to-transparent p-6 text-brand-sand">
                <p className="text-xs uppercase tracking-[0.28em] text-brand-gold">{content.imageEyebrow}</p>
                <p className="mt-2 max-w-sm text-2xl font-semibold">{content.imageCaption}</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 hidden max-w-[240px] rounded-[24px] border border-white/45 bg-white/75 p-4 text-brand-ink shadow-glow md:block">
            <p className="text-xs uppercase tracking-[0.24em] text-brand-ember">Brand feeling</p>
            <p className="mt-2 text-lg font-semibold">Soft luxury, calm confidence, and modern beauty storytelling.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
