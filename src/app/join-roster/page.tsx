import PageSection from "@/components/ui/page-section";
import { UI } from "@/lib/ui";

export default function JoinRosterPage() {
  return (
    <PageSection
      title="Join the Roster"
      description="A simplified responsive intake surface for vetted experts and technical associates."
    >
      <div className={`${UI.gridCard} grid gap-8 lg:grid-cols-2`}>
        <div className="space-y-4">
          <h2 className={UI.sectionHeading}>Eligibility</h2>
          <p className={UI.sectionText}>Select your expertise and years of experience.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {["WASH", "Climate", "TVET", "MEAL"].map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-primary/5 px-4 py-3 text-sm font-medium text-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {["Full Name", "Email", "Phone", "City"].map((field) => (
            <div key={field} className="rounded-2xl border border-border px-4 py-4 text-sm text-muted">
              {field}
            </div>
          ))}
          <div className="sm:col-span-2 rounded-2xl border border-border bg-accent/5 px-4 py-4 text-sm font-medium text-accent">
            Upload profile documents
          </div>
        </div>
      </div>
    </PageSection>
  );
}