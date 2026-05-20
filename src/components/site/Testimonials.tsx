import { motion } from "framer-motion";
import { Container } from "./Container";

const items = [
  {
    quote:
      "When my vehicle was hijacked, my consultant called me before I could call her. The replacement was sorted within the week.",
    name: "Naledi M.",
    role: "Personal client · 6 years",
  },
  {
    quote:
      "We migrated a 90-vehicle fleet across to Constellation. Their structure and reporting is honestly enterprise-grade.",
    name: "Werner S.",
    role: "Operations Director · Logistics",
  },
  {
    quote:
      "What we appreciate most is the calm. They explain, they document, and they follow through.",
    name: "Anita & David K.",
    role: "Family clients · 11 years",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-[color:var(--surface)]/60 py-32">
      <Container>
        <div className="mb-16 max-w-xl">
          <p className="eyebrow mb-5">Spoken by clients</p>
          <h2 className="text-4xl leading-[1.05] sm:text-5xl">
            Long-term clients,
            <br />
            <span className="italic text-[color:var(--gold-soft)]">long-term trust</span>.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex h-full flex-col justify-between rounded-2xl border border-[color:var(--hairline)] bg-gradient-to-b from-[color:var(--surface-elevated)] to-transparent p-8"
            >
              <div>
                <span className="font-display text-3xl text-[color:var(--gold)]">“</span>
                <blockquote className="mt-2 text-[15px] leading-relaxed text-foreground/90">
                  {t.quote}
                </blockquote>
              </div>
              <figcaption className="mt-8 border-t border-[color:var(--hairline)] pt-5">
                <p className="text-sm text-foreground">{t.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
