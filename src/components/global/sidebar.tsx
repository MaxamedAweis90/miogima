"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { CTA_LINKS, NAV_LINKS, ROUTES } from "@/lib/routes";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    const pathname = usePathname();

    // Prevent body scroll when mobile sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Handle viewport resize to close sidebar if switching to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                onClose();
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [onClose]);

    const isActiveLink = (href: string) => pathname === href;

    return (
        <>
            {/* Backdrop Overlay */}
            <div
                className={`fixed inset-0 z-50 bg-foreground/30 backdrop-blur-xs transition-opacity duration-300 md:hidden md:pointer-events-none md:invisible ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Sidebar Slide-over Panel */}
            <div
                className={`fixed inset-y-0 right-0 z-50 w-full max-w-[280px] sm:max-w-xs bg-background/90 backdrop-blur-xl p-6 shadow-2xl border-l border-border/60 transition-all duration-300 ease-out md:hidden md:pointer-events-none md:invisible ${
                    isOpen ? "translate-x-0" : "translate-x-full pointer-events-none invisible"
                }`}
            >
                <div className="flex flex-col h-full justify-between">
                    <div>
                        {/* Header: Brand and Close Button */}
                        <div className="flex items-center justify-between pb-6 border-b border-border/60">
                            <Link href={ROUTES.home} className="flex items-center gap-2" onClick={onClose}>
                                <Image
                                    src="/logo/logo.jpeg"
                                    alt="MIOGIMA Logo"
                                    width={32}
                                    height={32}
                                    className="h-8 w-8 rounded-lg object-cover border border-border/40"
                                />
                                <div className="leading-tight">
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                        MIOGIMA HUB
                                    </p>
                                </div>
                            </Link>

                            <button
                                onClick={onClose}
                                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-foreground/70 hover:bg-primary/5 hover:text-primary transition-colors duration-200"
                                aria-label="Close menu"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                                    <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex flex-col gap-1.5 mt-8">
                            {NAV_LINKS.map((link) => {
                                const active = isActiveLink(link.href);
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={onClose}
                                        className={`rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                                            active
                                                ? "bg-primary/10 text-primary shadow-[inset_0_0_0_1px_rgba(37,99,235,0.18)]"
                                                : "text-foreground/80 hover:bg-foreground/[0.03] hover:text-foreground"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Footer / Call-To-Action Button */}
                    <div className="pt-6 border-t border-border/60">
                        <Link
                            href={CTA_LINKS.contact.href}
                            onClick={onClose}
                            className="flex w-full items-center justify-center rounded-xl bg-accent py-3.5 text-sm font-bold text-white shadow-md shadow-accent/10 transition-colors duration-200 hover:bg-accent-hover"
                        >
                            {CTA_LINKS.contact.label}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
