"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { CTA_LINKS, NAV_LINKS, ROUTES } from "@/lib/routes";
import Sidebar from "./sidebar";

const containerClass = "mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8  rounded-b-2xl border border-border bg-background/60 shadow-sm shadow-black/5 backdrop-blur-md transition-shadow duration-300";
const navLinkClass = "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors duration-200 hover:bg-primary/10 hover:text-primary active:bg-primary/10 active:font-semibold active:text-primary";
const buttonPrimaryClass = "inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover";

const Header = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isActiveLink = (href: string) => pathname === href;

  const getLinkClassName = (href: string) =>
    `${navLinkClass} ${isActiveLink(href) ? "bg-primary/10 font-semibold text-primary shadow-[inset_0_0_0_1px_rgba(37,99,235,0.18)]" : ""}`;

  const getButtonClassName = (href: string) =>
    `${buttonPrimaryClass} ${isActiveLink(href) ? "ring-2 ring-primary/30 ring-offset-2 ring-offset-background" : ""}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50  duration-300">
      <div className={containerClass}>
        <Link href={ROUTES.home} className="flex items-center gap-3">
          <Image
            src="/logo/logo.jpeg"
            alt="MIOGIMA Logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl object-cover border border-border/40"
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              MIOGIMA HUB
            </p>
            <p className="text-xs text-muted">Institutional consultancy</p>
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={getLinkClassName(link.href)}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href={CTA_LINKS.contact.href} className={getButtonClassName(CTA_LINKS.contact.href)}>
              {CTA_LINKS.contact.label}
            </Link>
          </div>
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground/80 hover:bg-primary/5 hover:text-primary transition-colors duration-200 md:hidden"
          aria-label="Open menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-5 w-5">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>

        {/* Slide-over Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      </div>
    </header>
  );
};

export default Header;