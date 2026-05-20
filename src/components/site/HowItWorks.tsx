import { motion } from "framer-motion";
import { Container } from "./Container";

const steps = [
  {
    n: "01",
    title: "Submit your enquiry",
    body: "Share a few details about what you need protected. No commitment, no chasing.",
  },
  {
    n: "02",
    title: "A consultant prepares quotes",
    body: "We benchmark across our insurer partners and structure tailored options for your situation.",
  },
  {
    n: "03",
    title: "Receive professional cover",
    body: "Review options with your consultant, ask questions, and activate cover with full clarity.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-32">
      <Container>
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="eyebrow mb-5">How it works</p>
          <h2 className="text-4xl leading-[1.05] sm:text-5xl">
            Three calm steps. No call-centre maze.
          </h2>
        </div>

        <div className="relative grid gap-12 md:grid-cols-3">
          {/* Connecting line */}
          <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/30 to-transparent md:block" />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <div className="relative mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-[color:var(--gold)]/30 bg-background">
                <span className="font-display text-lg text-[color:var(--gold)]">{s.n}</span>
              </div>
              <h3 className="text-center text-xl text-foreground">{s.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-center text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
