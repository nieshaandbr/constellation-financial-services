import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Container } from "@/components/site/Container";
import { FleetSection } from "@/components/site/FleetSection";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Fleet insurance — Constellation Financial Services" },
      { name: "description", content: "Enterprise-grade fleet cover. Dedicated specialists, structured reporting and operational claims management." },
    ],
  }),
  component: FleetPage,
});

function FleetPage() {
  return (
    <PageShell
      eyebrow="Commercial fleet"
      title={
        <>
          Operational fleet cover,
          <br />
          <span className="italic text-[color:var(--gold-soft)]">structured around you</span>.
        </>
      }
      intro="From ten-vehicle operations to multi-depot fleets — our specialists structure cover, telematics integration and claims protocols around how your business actually runs."
    >
      <FleetSection />
      <Container className="pb-32">
        <div className="rounded-2xl border border-[color:var(--gold)]/30 bg-gradient-to-r from-[color:var(--gold)]/[0.07] to-transparent p-10 text-center">
          <h3 className="font-display text-3xl text-foreground">Speak to a fleet specialist</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Tell us about your operation. We'll structure the right options across our insurer
            partners.
          </p>
          <Link
            to="/quote"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm text-[color:var(--primary-foreground)] shadow-[var(--shadow-glow)]"
          >
            Request a fleet quote →
          </Link>
        </div>
      </Container>
    </PageShell>
  );
}
