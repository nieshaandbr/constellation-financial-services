import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import fleetImg from "@/assets/fleet.jpg";
import { Container } from "./Container";

const metrics = [
  { label: "Vehicles managed", value: "4,200+" },
  { label: "Renewal retention", value: "96%" },
  { label: "Avg. claim turnaround", value: "5 days" },
  { label: "Fleet specialists", value: "8" },
];

export function FleetSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[color:var(--hairline)]">
              <img
                src={fleetImg}
                alt="Commercial truck fleet at dusk"
                className="h-[520px] w-full object-cover"
                loading="lazy"
                width={1600}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              {/* Floating metric card */}
              <div className="absolute bottom-6 left-6 right-6 glass-card rounded-xl p-6">
                <p className="eyebrow mb-4">Fleet operations · Live</p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
                  {metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-display text-2xl text-foreground">{m.value}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <p className="eyebrow mb-5">Commercial fleet</p>
            <h2 className="text-4xl leading-[1.05] sm:text-5xl">
              Enterprise fleet cover,
              <br />
              <span className="italic text-[color:var(--gold-soft)]">built operationally</span>.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Whether you operate ten vehicles or a multi-depot fleet, our specialists structure
              cover, telematics integration and claims protocols around how your operation actually
              runs.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                "Dedicated fleet consultant",
                "Quarterly portfolio reviews",
                "Driver onboarding & off-boarding workflows",
                "Telematics-aware risk management",
                "Structured claims & recovery",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span className="mt-2 inline-block h-px w-6 bg-[color:var(--gold)]" />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              to="/fleet"
              className="mt-10 inline-flex items-center gap-2 text-sm text-[color:var(--gold)] transition-colors hover:text-[color:var(--gold-soft)]"
            >
              Explore fleet capability
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
