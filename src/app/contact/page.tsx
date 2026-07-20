import PageSection from "@/components/ui/page-section";
import { UI } from "@/lib/ui";

export default function ContactPage() {
  return (
    <PageSection
      title="Contact Us"
      description="A responsive contact entry point for proposals, coordination, and institutional inquiries."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <div className={`${UI.gridCard} lg:col-span-2`}>
          <h2 className={UI.sectionHeading}>Corporate coordinates</h2>
          <p className={`${UI.sectionText} mt-4`}>
            Use this channel for RFP submissions, partnership requests, and project follow-up.
          </p>
        </div>
        <div className={`${UI.gridCard} lg:col-span-3`}>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Full Name", "Institutional Email", "Service Category", "Message"].map((field) => (
              <div key={field} className="rounded-2xl border border-border px-4 py-4 text-sm text-muted sm:col-span-1">
                {field}
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-accent px-5 py-4 text-center text-sm font-semibold text-white">
            Submit inquiry
          </div>
        </div>
      </div>
    </PageSection>
  );
}