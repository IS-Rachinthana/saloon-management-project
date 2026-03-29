"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Scissors, Settings2, UserRoundCog } from "lucide-react";

import { managementNav } from "@/lib/data";
import { cn } from "@/lib/utils";

export function DashboardFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

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
            {managementNav.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-sm transition",
                    isActive
                      ? "bg-brand-sand text-brand-ink"
                      : "text-brand-sand/80 hover:bg-white/10 hover:text-brand-sand"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
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
          <div className="mx-auto max-w-7xl space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-brand-sand px-4 py-3 text-sm text-brand-ink">
              <CalendarDays className="h-4 w-4 text-brand-ember" />
              Live salon board for mobile, desktop, and TV mode
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
