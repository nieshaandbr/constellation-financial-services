import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldAlert, Phone, FileUp, LifeBuoy, Clock, FileCheck } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Container } from "@/components/site/Container";

export const Route = createFileRoute("/claims")({
  head: () => ({
    meta: [
      { title: "Claims support — Constellation Financial Services" },
      { name: "description", content: "Calm, structured claims advocacy. Open a claim, upload documents and stay informed at every step." },
    ],
  }),
  component: ClaimsPage,
});

function ClaimsPage() {
  return (
    <PageShell
      eyebrow="Claims"
      title={
        <>
          Calm, structured,
          <br />
          <span className="italic text-[color:var(--gold-soft)]">on your side</span>.
        </>
      }
      intro="Our claims process is built to remove the weight from a stressful moment — clear steps, real people, and full advocacy with your insurer."
    >
      <Container className="py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Phone, t: "1. Call us", d: "Reach your consultant or the 24/7 claims line." },
            { icon: FileUp, t: "2. Upload documents", d: "Photos, statements and supporting files in one place." },
            { icon: ShieldAlert, t: "3. We engage the insurer", d: "We open and advocate the claim on your behalf." },
            { icon: FileCheck, t: "4. Resolution & repair", d: "We coordinate assessment, payment and repair." },
          ].map((s) => (
            <div key={s.t} className="rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-elevated)] p-6">
              <s.icon className="h-5 w-5 text-[color:var(--gold)]" />
              <p className="mt-5 text-sm text-foreground">{s.t}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-[color:var(--gold)]/30 bg-gradient-to-b from-[color:var(--gold)]/[0.06] to-transparent p-8">
            <div className="flex items-center gap-3">
              <ShieldAlert className="h-5 w-5 text-[color:var(--gold)]" />
              <p className="font-display text-lg text-foreground">24/7 emergency response</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Hijackings, accidents and breakdowns don't keep office hours. Our emergency desk is
              available around the clock to coordinate assistance, towing and immediate insurer
              notification.
            </p>
            <p className="mt-6 font-display text-2xl text-foreground">+27 (0)11 000 0000</p>
            <p className="mt-1 text-xs text-muted-foreground">Emergency claims · 24/7</p>
          </div>

          <div className="rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-elevated)] p-8">
            <div className="flex items-center gap-3">
              <LifeBuoy className="h-5 w-5 text-[color:var(--gold)]" />
              <p className="font-display text-lg text-foreground">Open a claim</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Use our structured claims intake to share details, upload documents and track the
              file with your consultant.
            </p>
            <Link
              to="/support"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-5 py-2.5 text-sm text-[color:var(--primary-foreground)]"
            >
              Open claims portal →
            </Link>
            <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              Avg. acknowledgement under 30 minutes
            </div>
          </div>
        </div>
      </Container>
    </PageShell>
  );
}
