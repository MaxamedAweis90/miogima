"use client";

import React from "react";
import Link from "next/link";

import { ROUTES } from "@/lib/routes";

// Droplet Icon for WASH
function WashIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5.5 w-5.5"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

// Leaf Icon for Climate
function ClimateIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5.5 w-5.5"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z" />
      <path d="M19 2c-2.26 4.33-5.27 7.14-8 8" />
    </svg>
  );
}

// BookOpen Icon for TVET
function TVETIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5.5 w-5.5"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

// BarChart3 Icon for MEAL
function MEALIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5.5 w-5.5"
    >
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-4" />
    </svg>
  );
}

const pillarsData = [
  {
    title: "WASH Engineering & Infrastructure",
    description:
      "Water supply systems, sanitation infrastructure, and resource sustainability networks built for regional development and community resilience.",
    icon: WashIcon,
    href: `${ROUTES.services}#wash`,
  },
  {
    title: "Climate Adaptation Specialist",
    description:
      "Climate resilience programming, environmental impact analyses, and sustainable green initiatives designed to protect vulnerable ecosystems.",
    icon: ClimateIcon,
    href: `${ROUTES.services}#climate`,
  },
  {
    title: "TVET Trade Instructor & Curriculum",
    description:
      "Technical and Vocational Education and Training frameworks, vocational curriculum engineering, and socio-economic workforce integration pipelines.",
    icon: TVETIcon,
    href: `${ROUTES.services}#tvet`,
  },
  {
    title: "MEAL Specialist & Project Management",
    description:
      "Monitoring, Evaluation, Accountability, and Learning pipelines paired with rigorous project governance and risk mitigation frameworks.",
    icon: MEALIcon,
    href: `${ROUTES.services}#meal`,
  },
];

export default function Pillars() {
  return (
    <section className="relative w-full bg-white pt-20 pb-32 lg:pt-24 lg:pb-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="mt-5 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-[44px] leading-[1.15]">
            Our Core Pillars of{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-center text-sm text-muted/80 sm:text-base leading-relaxed">
            Positioning institutions for large-scale procurement and regional
            development through four foundational technical tracks.
          </p>
        </div>

        {/* 2x2 Responsive Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {pillarsData.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group relative flex flex-col justify-between items-center text-center rounded-3xl border border-border/60 bg-background/40 p-8 shadow-[0_4px_20px_rgba(16,32,51,0.01)] hover:shadow-[0_12px_30px_rgba(16,32,51,0.04)] hover:bg-background/80 hover:border-primary/30 transition-all duration-350 hover:-translate-y-1 hover:cursor-pointer"
              >
                <div className="flex flex-row items-center gap-5">
                  {/* Icon Box */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary  transition-all duration-350 group-hover:bg-primary group-hover:text-white">
                    <Icon />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text text-foreground transition-colors duration-350 group-hover:text-primary">
                    {pillar.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm text-muted/80 leading-7">
                  {pillar.description}
                </p>

                {/* Link / Call-to-action */}
                <div className="mt-6 flex items-center justify-center gap-1.5 text-sm font-bold text-primary group-hover:text-primary-hover">
                  <span>View Details</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
