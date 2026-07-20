"use client";

import Link from "next/link";
import Image from "next/image";

import { ROUTES } from "@/lib/routes";

export default function Footer() {
  return (
    <footer className="relative w-full bg-white">
      {/* ─── Floating Logo Overlap (Absolute Positioned relative to footer parent, avoiding overflow-hidden clipping) ─── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative group">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-emerald-400/40 to-teal-500/30 blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
          <Image
            src="/logo/logo.jpeg"
            alt="MIOGIMA HUB Logo"
            width={108}
            height={108}
            className="relative h-24 w-24 sm:h-[108px] sm:w-[108px] rounded-full border-4 border-[#111] object-cover shadow-2xl shadow-black/60 transition-transform duration-350 hover:scale-105"
          />
        </div>
      </div>

      {/* ─── Dark Footer Body ─── */}
      <div className="relative overflow-hidden rounded-t-[48px] sm:rounded-t-[80px] lg:rounded-t-[120px] bg-[#111] pt-24 pb-10">
        {/* Topographic SVG background lines */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1440 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {[0, 90, 180, 270, 360, 450].map((offset, i) => (
            <path
              key={i}
              d={`M-200 ${180 + offset} C 200 ${100 + offset}, 400 ${280 + offset}, 660 ${200 + offset} S 1020 ${80 + offset}, 1260 ${240 + offset} S 1480 ${320 + offset}, 1700 ${180 + offset}`}
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="1"
              fill="none"
            />
          ))}
        </svg>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* ─── Center Brand Name + Tagline ─── */}
          <div className="text-center mb-14">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
              MIOGIMA
            </h3>
            <p className="mt-1 text-base sm:text-xl font-semibold tracking-[0.35em] text-white/70 uppercase">
              ~ HUB ~
            </p>
            <p className="mt-3 font-serif italic text-sm sm:text-base text-emerald-400/90 tracking-wide">
              Giving Life to Programmes
            </p>
          </div>

          {/* ─── 3-Column Layout Block (Matching Reference Image) ─── */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:items-center">
            {/* ── LEFT: Contact & Socials Grouped Together ── */}
            <div className="flex flex-row items-start justify-between sm:justify-start gap-8 sm:gap-16">
              {/* Contact Section */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-3">
                  Contact
                </h4>
                <div className="space-y-1 text-sm text-white/55 leading-6">
                  <p>Mogadishu, Somalia</p>
                  <p>Nairobi, Kenya</p>
                  <p>+254 700 000 000</p>
                  <a
                    href="mailto:info@miogimahub.com"
                    className="block text-emerald-400 hover:text-white transition-colors duration-200"
                  >
                    info@miogimahub.com
                  </a>
                </div>
              </div>
              {/* Social Links Section */}
              <div className="pt-8 space-y-3">
                {[
                  { label: "Facebook", href: "https://facebook.com" },
                  { label: "Instagram", href: "https://instagram.com" },
                  { label: "LinkedIn", href: "https://linkedin.com" },
                ].map((soc) => (
                  <a
                    key={soc.label}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group/soc w-28"
                  >
                    <span className="text-sm text-white/55 group-hover/soc:text-white transition-colors duration-200">
                      {soc.label}
                    </span>
                    <span className="text-white/30 group-hover/soc:text-emerald-400 transition-colors duration-200 text-[10px] ml-1">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* ── CENTER: CTA Buttons (Centered under logo & brand title) ── */}
            <div className="flex flex-row items-center justify-center gap-3 w-full">
              <Link
                href={ROUTES.joinRoster}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all duration-300 hover:bg-emerald-300 hover:scale-[1.02] shadow-lg shadow-emerald-500/20 whitespace-nowrap"
              >
                <span>Join Roster</span>
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-900/15">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="h-2.5 w-2.5"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href={ROUTES.contact}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all duration-300 hover:bg-emerald-300 hover:scale-[1.02] shadow-lg shadow-emerald-500/20 whitespace-nowrap"
              >
                <span>Contact Us</span>
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-900/15">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="h-2.5 w-2.5"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            {/* ── RIGHT: Navigation links ── */}
            <div className="flex justify-start lg:justify-end w-full">
              <div className="w-full max-w-xs">
                <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-3">
                  Quick Links
                </h4>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {/* Sub-col 1 */}
                  <div className="space-y-2">
                    <Link
                      href={ROUTES.home}
                      className="block text-sm text-white/55 hover:text-white transition-colors duration-200"
                    >
                      Home
                    </Link>
                    <Link
                      href={ROUTES.about}
                      className="block text-sm text-white/55 hover:text-white transition-colors duration-200"
                    >
                      About
                    </Link>
                    <Link
                      href={ROUTES.services}
                      className="block text-sm text-white/55 hover:text-white transition-colors duration-200"
                    >
                      Services
                    </Link>
                  </div>
                  {/* Sub-col 2 */}
                  <div className="space-y-2">
                    <Link
                      href={ROUTES.portfolio}
                      className="block text-sm text-white/55 hover:text-white transition-colors duration-200"
                    >
                      Portfolio
                    </Link>
                    <Link
                      href={ROUTES.joinRoster}
                      className="block text-sm text-white/55 hover:text-white transition-colors duration-200"
                    >
                      Join Roster
                    </Link>
                    <Link
                      href={ROUTES.contact}
                      className="block text-sm text-white/55 hover:text-white transition-colors duration-200"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Sub-Footer ─── */}
          <div className="mt-14 border-t border-white/8 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Left: Branding detail text */}
            <p className="text-xs text-white/35">
              Empowering development and engineering solutions across East
              Africa.
            </p>

            {/* Right: Policy Pill — light bg exactly like reference */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/95 px-5 py-2.5 text-[11px] font-semibold text-foreground shadow-lg">
              <Link
                href="#cookies"
                className="hover:text-primary transition-colors duration-150 whitespace-nowrap"
              >
                Cookies policy
              </Link>
              <span className="h-3 w-px bg-border/70" />
              <Link
                href="#privacy"
                className="hover:text-primary transition-colors duration-150 whitespace-nowrap"
              >
                Privacy policy
              </Link>
              <span className="h-3 w-px bg-border/70" />
              <span className="text-muted whitespace-nowrap">©2026</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
