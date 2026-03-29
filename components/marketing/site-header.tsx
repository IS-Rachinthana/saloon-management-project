"use client";

import Link from "next/link";
import { Menu, Scissors } from "lucide-react";
import { useState } from "react";

import { useLanguage } from "@/components/language-provider";
import { languages, translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const content = translations[language].siteHeader;
  const navLinks = [
    { label: content.nav.services, href: "#services" },
    { label: content.nav.branches, href: "#branches" },
    { label: content.nav.offers, href: "#offers" },
    { label: content.nav.management, href: "#platform" },
    { label: content.nav.contact, href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-brand-ink/10 bg-brand-mist/80 backdrop-blur">
      <div className="shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-ink text-brand-sand shadow-glow">
            <Scissors className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-brand-ember">{content.brandTag}</p>
            <p className="text-lg font-semibold">Saloon Hair Warna</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-brand-ink/70 transition hover:text-brand-ink">
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 rounded-full border border-brand-ink/10 bg-white/85 p-1 shadow-sm">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => setLanguage(item.code)}
                className={cn(
                  "rounded-full px-3 py-2 text-xs font-medium transition",
                  language === item.code ? "bg-brand-ink text-brand-sand" : "text-brand-ink/70 hover:bg-brand-sand"
                )}
                aria-label={`${content.languageLabel}: ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <Link
            href="/dashboard"
            className="rounded-full bg-brand-ink px-5 py-2.5 text-sm font-medium text-brand-sand transition hover:bg-brand-ember"
          >
            {content.openPlatform}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-ink/10 bg-white/70 md:hidden"
          aria-label="Toggle navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <div className={cn("border-t border-brand-ink/10 md:hidden", open ? "block" : "hidden")}>
        <div className="shell flex flex-col gap-4 py-4">
          <div className="rounded-[22px] border border-brand-ink/10 bg-white/75 p-3">
            <p className="mb-3 text-sm text-brand-ink/75">{content.languageLabel}</p>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLanguage(item.code)}
                  className={cn(
                    "rounded-full px-3 py-2 text-xs font-medium transition",
                    language === item.code ? "bg-brand-ink text-brand-sand" : "bg-brand-sand/70 text-brand-ink"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-brand-ink/80" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/dashboard"
            className="inline-flex w-full items-center justify-center rounded-full bg-brand-ink px-5 py-3 text-sm font-medium text-brand-sand"
            onClick={() => setOpen(false)}
          >
            {content.openPlatform}
          </Link>
        </div>
      </div>
    </header>
  );
}
