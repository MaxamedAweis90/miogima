"use client";

import React from "react";
import Image from "next/image";

import worldBank from "../../../public/companies/World-Bank.png";
import giz from "../../../public/companies/Deutsche_Gesellschaft_fur_Internationale_Zusammenarbeit_Logo.svg_-1024x281.png";
import undp from "../../../public/companies/UNDP.png";
import unicef from "../../../public/companies/UNICEF_Logo.png";
import wfp from "../../../public/companies/world-food-programme.png";

const companies = [
    { name: "World Bank", src: worldBank },
    { name: "GIZ", src: giz },
    { name: "UNDP", src: undp },
    { name: "UNICEF", src: unicef },
    { name: "World Food Programme", src: wfp },
];

// Duplicate the list 4 times to fill the screen width and guarantee a seamless looping marquee
const loopingCompanies = [...companies, ...companies, ...companies, ...companies];

export default function PartnersDonors() {
    return (
        <section className="relative w-full border-b border-border/40 bg-foreground/[0.015] py-10 lg:h-[25vh] lg:py-0 flex flex-col justify-center overflow-hidden">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-8 flex justify-center lg:mb-10">
                    <h2 className="text-[clamp(0.65rem,1.2vw,0.75rem)] font-extrabold uppercase tracking-[0.24em] text-foreground/50">
                        Trusted Partners & Donors
                    </h2>
                </div>

                {/* Infinity Loop Carousel */}
                <div className="relative w-full overflow-hidden marquee-mask py-2">
                    <div className="hero-stats-marquee flex w-max items-center gap-16 sm:gap-24 whitespace-nowrap hover:[animation-play-state:paused] cursor-pointer">
                        {loopingCompanies.map((company, index) => (
                            <div
                                key={`${company.name}-${index}`}
                                className="flex-none flex items-center justify-center"
                            >
                                <Image
                                    src={company.src}
                                    alt={company.name}
                                    className="h-10 sm:h-12 w-auto object-contain grayscale opacity-60 contrast-75 hover:grayscale-0 hover:opacity-100 hover:contrast-100 transition-all duration-350"
                                    placeholder="blur"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
