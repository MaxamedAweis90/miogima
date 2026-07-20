import PageSection from "@/components/ui/page-section";
import { UI } from "@/lib/ui";

const leaders = [
  { name: "Dr. Amina Noor", title: "Managing Partner", focus: "Institutional partnerships and strategic delivery." },
  { name: "Eng. David Otieno", title: "Technical Lead", focus: "WASH systems, infrastructure, and implementation oversight." },
  { name: "Grace Wanjiku", title: "Program Director", focus: "MEAL, governance, and donor reporting structures." },
];

export default function AboutPage() {
  return (
    <PageSection
      title="About MIOGIMA HUB"
      description="A focused consultancy platform built for executive review, donor engagement, and regional program execution."
    >
      <div className="grid gap-8">
        <div className={`${UI.gridCard} max-w-3xl`}> 
          <h2 className={UI.sectionHeading}>Core mission</h2>
          <p className={`${UI.sectionText} mt-4`}>
            We deliver disciplined technical support and accountable coordination across East
            African development portfolios.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <article key={leader.name} className={UI.gridCard}>
              <div className="h-40 rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-border" />
              <h3 className="mt-5 text-xl font-semibold text-foreground">{leader.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{leader.title}</p>
              <p className={`${UI.sectionText} mt-3`}>{leader.focus}</p>
            </article>
          ))}
        </div>
      </div>
    </PageSection>
  );
}