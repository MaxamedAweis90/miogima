import Link from "next/link";

import PageSection from "@/components/ui/page-section";
import { ROUTES } from "@/lib/routes";
import { UI } from "@/lib/ui";

const projects = [
  { country: "Kenya", title: "County WASH upgrade", summary: "Sanitation and water infrastructure planning for public delivery." },
  { country: "Somalia", title: "Resilience support program", summary: "Climate and governance support for partner implementation." },
  { country: "Uganda", title: "TVET curriculum rollout", summary: "Training framework development for workforce alignment." },
];

export default function PortfolioPage() {
  return (
    <PageSection
      title="Portfolio"
      description="Representative case sheets presented in a consistent responsive card grid."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className={UI.gridCard}>
            <div className="h-44 rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-border" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{project.country}</p>
            <h3 className="mt-2 text-xl font-semibold text-foreground">{project.title}</h3>
            <p className={`${UI.sectionText} mt-3`}>{project.summary}</p>
            <Link href={ROUTES.contact} className="mt-6 inline-flex text-sm font-semibold text-accent transition-colors duration-200 hover:text-accent-hover">
              Read Case Sheet
            </Link>
          </article>
        ))}
      </div>
    </PageSection>
  );
}