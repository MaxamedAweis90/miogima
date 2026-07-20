import Link from "next/link";

import { CTA_LINKS, ROUTES } from "@/lib/routes";
import HeroCarousel from "./hero-carousel";

const stats = [
  { value: "0+", label: "Active groups", icon: UsersIcon },
  { value: "$12.7M", label: "Total disbursed", icon: CashIcon },
  { value: "76%", label: "Women clients", icon: SparkIcon },
  { value: "62%", label: "Youth clients", icon: GlobeIcon },
  { value: "18+", label: "Districts served", icon: ShieldIcon },
  { value: "94%", label: "Repayment rate", icon: TrendIcon },
];

const loopingStats = [...stats, ...stats];

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M17 20c0-2.761-2.239-5-5-5s-5 2.239-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M20 20c0-1.874-1.045-3.523-2.576-4.381"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16.5 7.5a2.5 2.5 0 1 1 0 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CashIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 12c2.2-1.8 4.5-2.8 8-2.8S17.8 10.2 20 12c-2.2 1.8-4.5 2.8-8 2.8S6.2 13.8 4 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M11.8 8.2v7.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13.8 9.2c0-.9-.8-1.7-2-1.7s-2 .7-2 1.7.8 1.5 2 1.8l1 .3c1.2.3 2 1 2 2s-.8 1.8-2 1.8-2-.8-2-1.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M19 16l.9 2.2L22 19l-2.1.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4 12h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 3.8c2.4 2 3.8 4.9 3.8 8.2s-1.4 6.2-3.8 8.2c-2.4-2-3.8-4.9-3.8-8.2S9.6 5.8 12 3.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3 19 6.2v5.1c0 4.4-3 8.4-7 9.7-4-1.3-7-5.3-7-9.7V6.2L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m9.5 12 1.9 1.9 3.9-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrendIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 16.5 9.2 11l3.4 3.4L20 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8 7H20v4.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate -mt-20 min-h-[660px] sm:min-h-[700px] lg:min-h-0 lg:h-svh overflow-hidden border-b border-border bg-foreground pt-20">
      <HeroCarousel />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="flex h-full w-full items-center">
          <div className="max-w-2xl pt-10 pb-36 text-background sm:pt-16 sm:pb-40 lg:pt-0 lg:pb-32">
            <div className="mt-5 space-y-5">
              <h1 className="text-4xl font-black tracking-tight text-background sm:text-5xl lg:text-[56px] leading-[1.1] text-background">
                Fostering Financial
                <span className="block text-accent">Inclusion in Somalia</span>
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-background/75 sm:text-base">
                RAAS Microfinance Institution delivers Sharia-compliant
                financial products to empower entrepreneurs, women, and youth
                across Somalia building resilient livelihoods and sustainable
                futures.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link
                href={CTA_LINKS.contact.href}
                className="inline-flex items-center justify-center rounded-full bg-[#e11d48] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/10 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-red-700"
              >
                Explore Our Services
              </Link>
              <Link
                href={ROUTES.portfolio}
                className="inline-flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e11d48] text-white transition-transform duration-250 group-hover:scale-105 shadow-md shadow-red-600/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="h-5 w-5"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm font-bold text-background/80 transition-colors duration-250 group-hover:text-background">
                  View Portfolio
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Wrapper Area */}
      <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 lg:inset-x-8 lg:bottom-6 z-20">
        <div className="mx-auto max-w-7xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(3,15,28,0.15)] backdrop-blur-2xl marquee-mask">
          <div className="relative overflow-hidden px-0 py-0">
            <div className="hero-stats-marquee flex w-max items-stretch">
              {loopingStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={`${stat.label}-${index}`}
                    className="flex-none w-[84vw] px-2 py-3 sm:w-[44vw] md:w-[32vw] lg:w-[24vw] xl:w-[21vw]"
                  >
                    <div className="flex min-h-27 items-center gap-4 border border-white/8 bg-white/4 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:px-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 bg-white/7 text-background shadow-sm shadow-black/10">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[clamp(1.5rem,2vw,2.6rem)] font-black leading-none tracking-tight text-background">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-[0.7rem] font-extrabold uppercase tracking-[0.24em] text-background/75 sm:text-xs">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
