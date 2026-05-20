import { motion } from "framer-motion";
import { Container } from "./Container";

const reasons = [
  { n: "01", title: "Real consultants, not call centres", body: "You speak to the same person who structured your policy. No queue, no scripts." },
  { n: "02", title: "Tailored, never templated", body: "Every quote is built around your circumstances and re-evaluated as your life changes." },
  { n: "03", title: "Operational professionalism", body: "Documented processes, structured handovers and audit-ready records on every file." },
  { n: "04", title: "Claims advocacy", body: "We sit on your side of the table when something goes wrong — and stay there until it's resolved." },
];

export function WhyConstellation() {
  return (
    <section className="relative bg-[color:var(--surface)]/60 py-32">
      <Container>
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow mb-5">Why Constellation</p>
            <h2 className="text-4xl leading-[1.05] sm:text-5xl">
              A brokerage that
              <span className="italic text-[color:var(--gold-soft)]"> behaves like a partner</span>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Insurance is a relationship business. We treat it that way — with structure,
            documentation and a consistent point of contact.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--hairline)] sm:grid-cols-2">
          {reasons.map((r, i) => (
            <motion.div
              key={r.n}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative bg-[color:var(--surface-elevated)] p-10"
            >
              <div className="flex items-start gap-6">
                <span className="font-display text-sm text-[color:var(--gold)]">{r.n}</span>
                <div>
                  <h3 className="text-xl text-foreground">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
