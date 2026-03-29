"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";

export function ContactSection() {
  const { language } = useLanguage();
  const content = translations[language].contact;

  return (
    <section id="contact" className="shell pb-24">
      <div className="card grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_0.85fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-brand-ember">{content.eyebrow}</p>
          <h2 className="section-title">{content.title}</h2>
          <p className="section-copy">{content.description}</p>
        </div>

        <div className="rounded-[28px] bg-brand-ink p-7 text-brand-sand">
          <div className="space-y-3 text-sm leading-7 text-brand-sand/75">
            <p>{content.brand}</p>
            <p>{content.build}</p>
            <p>{content.phase}</p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-5 py-3 text-sm font-medium text-brand-ink transition hover:bg-brand-sand"
            >
              {content.platformCta}
            </Link>
            <Link
              href="https://wa.me/94770000000"
              className="inline-flex items-center justify-center rounded-full border border-brand-sand/25 px-5 py-3 text-sm font-medium text-brand-sand transition hover:border-brand-gold hover:text-brand-gold"
            >
              {content.whatsappCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
