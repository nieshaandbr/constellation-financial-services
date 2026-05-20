import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Container } from "@/components/site/Container";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Constellation Financial Services" },
      { name: "description", content: "A Johannesburg insurance brokerage built around long-term client relationships and operational professionalism." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title={
        <>
          A brokerage built on
          <br />
          <span className="italic text-[color:var(--gold-soft)]">relationships and structure</span>.
        </>
      }
      intro="Constellation Financial Services is a Johannesburg-based insurance brokerage. We specialise in vehicle and fleet cover, with a wider practice across personal and commercial lines."
    >
      <Container className="py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow mb-4">Our practice</p>
            <p className="text-base leading-relaxed text-foreground/85">
              We are a small, structured team of consultants, claims specialists and fleet
              operators. Every client is paired with a primary consultant who owns the
              relationship from quote to renewal — and every claim.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We work with South Africa's leading insurers as a placement broker, advocating on
              your behalf and structuring cover around your real circumstances rather than
              templated products.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--hairline)] sm:grid-cols-2">
            {[
              { v: "22+", l: "Years of brokerage" },
              { v: "14", l: "Insurer partners" },
              { v: "4,200+", l: "Vehicles managed" },
              { v: "96%", l: "Renewal retention" },
            ].map((s) => (
              <div key={s.l} className="bg-[color:var(--surface-elevated)] p-8">
                <p className="font-display text-3xl text-foreground">{s.v}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </PageShell>
  );
}
