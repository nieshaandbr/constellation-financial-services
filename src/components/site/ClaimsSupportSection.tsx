import { motion } from "framer-motion";
import { LifeBuoy, Phone, FileUp, ShieldAlert } from "lucide-react";
import { Container } from "./Container";
import { Link } from "@tanstack/react-router";

const items = [
  { icon: ShieldAlert, title: "24/7 emergency response", body: "Hijacking, accident or breakdown — we coordinate the right response immediately." },
  { icon: Phone, title: "Direct consultant line", body: "No queue. Your consultant or their delegated backup answers." },
  { icon: FileUp, title: "Structured document handling", body: "Upload, e-sign and track every claim document in one secure place." },
  { icon: LifeBuoy, title: "Claims advocacy", body: "We negotiate with insurers on your behalf and keep you informed at every step." },
];

export function ClaimsSupportSection() {
  return (
    <section className="relative py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">Claims support</p>
            <h2 className="text-4xl leading-[1.05] sm:text-5xl">
              When something goes wrong,
              <br />
              <span className="italic text-[color:var(--gold-soft)]">we move first</span>.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Claims are when the relationship matters most. Our process is calm, structured and
              advocacy-led — built to take the weight off you.
            </p>
            <Link
              to="/claims"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-gradient-to-b from-[color:var(--gold)]/10 to-transparent px-6 py-3 text-sm text-[color:var(--gold)] transition-all hover:border-[color:var(--gold)]/70"
            >
              Open the claims portal →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-elevated)] p-6"
              >
                <it.icon className="h-5 w-5 text-[color:var(--gold)]" />
                <h3 className="mt-5 text-base text-foreground">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
