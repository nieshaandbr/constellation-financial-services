import { motion } from "framer-motion";
import { Car, Truck, Building2, Briefcase, ShieldCheck } from "lucide-react";
import { Container } from "./Container";

const items = [
  {
    icon: Car,
    title: "Personal vehicles",
    desc: "Comprehensive cover tailored to drivers, families and high-value vehicles.",
  },
  {
    icon: Truck,
    title: "Commercial fleet",
    desc: "Operational fleet cover from a handful of vehicles to multi-depot operations.",
  },
  {
    icon: Building2,
    title: "Property",
    desc: "Residential and commercial property cover with structured replacement strategy.",
  },
  {
    icon: Briefcase,
    title: "Business assets",
    desc: "Equipment, stock and liability cover scoped to how your business actually operates.",
  },
  {
    icon: ShieldCheck,
    title: "Specialised cover",
    desc: "Aviation, agriculture, transit, marine and bespoke risks placed with specialist underwriters.",
  },
];

export function ProtectGrid() {
  return (
    <section className="relative py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow mb-5">What we protect</p>
            <h2 className="text-4xl leading-[1.05] sm:text-5xl">
              Cover scoped to the things
              <span className="italic text-[color:var(--gold-soft)]"> that move you</span>.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              We start with how you actually live and operate, then structure the policies around
              it. Never the other way around.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-[color:var(--hairline)] bg-gradient-to-b from-[color:var(--surface-elevated)] to-[color:var(--surface)] p-7 transition-all hover:border-[color:var(--gold)]/30"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[color:var(--gold)]/0 blur-3xl transition-all duration-700 group-hover:bg-[color:var(--gold)]/15" />

                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--gold)]/25 bg-[color:var(--gold)]/[0.08]">
                    <item.icon className="h-5 w-5 text-[color:var(--gold)]" />
                  </div>
                  <h3 className="mt-6 text-xl text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
