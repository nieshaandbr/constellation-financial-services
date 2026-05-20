import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ProtectGrid } from "@/components/site/ProtectGrid";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/protect")({
  head: () => ({
    meta: [
      { title: "What we protect — Constellation Financial Services" },
      { name: "description", content: "Personal vehicles, commercial fleet, property, business assets and specialised cover." },
    ],
  }),
  component: ProtectPage,
});

function ProtectPage() {
  return (
    <PageShell
      eyebrow="What we protect"
      title={
        <>
          Cover scoped to the things
          <br />
          <span className="italic text-[color:var(--gold-soft)]">that move you</span>.
        </>
      }
      intro="Our practice spans personal, commercial and specialised lines — placed across South Africa's leading insurers."
    >
      <ProtectGrid />
      <FinalCta />
    </PageShell>
  );
}
