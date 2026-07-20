import PageSection from "@/components/ui/page-section";
import { UI } from "@/lib/ui";

const services = [
  {
    title: "WASH Engineering & Infrastructure",
    description: "Water supply, sanitation, and sustainability systems for long-term delivery.",
    metrics: ["Design review", "Implementation support", "O&M planning"],
  },
  {
    title: "Climate Adaptation",
    description: "Climate resilience programming, risk reduction, and environmental safeguards.",
    metrics: ["Adaptation planning", "Risk analysis", "Reporting"],
  },
  {
    title: "TVET & Curriculum",
    description: "Technical training frameworks and workforce-aligned curriculum systems.",
    metrics: ["Curriculum design", "Competency mapping", "Training support"],
  },
  {
    title: "MEAL & Project Management",
    description: "Monitoring, accountability, learning, and governance for donor programs.",
    metrics: ["Indicator design", "Learning reviews", "Project controls"],
  },
];

export default function ServicesPage() {
  return (
    <PageSection
      title="Technical Services"
      description="A responsive service layout that uses the same palette, spacing, and cards as the rest of the app."
    >
      <div className="space-y-6">
        {services.map((service, index) => (
          <section key={service.title} className={`${UI.gridCard} overflow-hidden`}>
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div className={index % 2 === 1 ? "md:order-2" : undefined}>
                <p className={UI.chip}>{service.title}</p>
                <p className={`${UI.sectionText} mt-4`}>{service.description}</p>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : undefined}>
                <ul className="grid gap-3 sm:grid-cols-3">
                  {service.metrics.map((metric) => (
                    <li key={metric} className="rounded-2xl border border-border bg-primary/5 px-4 py-3 text-sm font-medium text-foreground">
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </PageSection>
  );
}