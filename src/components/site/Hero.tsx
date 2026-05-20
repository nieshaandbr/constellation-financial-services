import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-vehicle.jpg";
import { Container } from "./Container";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Luxury vehicle on a Johannesburg street at night"
          className="h-full w-full object-cover object-[60%_center] opacity-90"
          fetchPriority="high"
          width={1920}
          height={1280}
        />
        {/* Dark cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/50" />
        {/* Subtle gold ambient light */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute -right-32 top-1/3 h-[480px] w-[480px] rounded-full bg-[color:var(--gold)]/15 blur-[140px]"
        />
      </div>

      <Container className="relative pt-44 pb-32 md:pt-52 md:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex h-px w-10 bg-[color:var(--gold)]" />
            <span className="eyebrow">Insurance brokerage · Est. Johannesburg</span>
          </div>

          <h1 className="text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            Protection that moves
            <br />
            <span className="italic text-[color:var(--gold-soft)]">with your life</span>
            <br />
            and your business.
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            We are a structured brokerage built around real consultants. Tailored vehicle, fleet
            and asset cover — prepared by people who answer when you call.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              to="/quote"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-7 py-3.5 text-sm font-medium text-[color:var(--primary-foreground)] shadow-[var(--shadow-glow)] transition-all hover:shadow-[0_0_80px_-8px_color-mix(in_oklab,var(--gold)_55%,transparent)]"
            >
              Get a quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/support"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--hairline)] bg-white/[0.02] px-7 py-3.5 text-sm text-foreground transition-colors hover:border-foreground/30 hover:bg-white/[0.05]"
            >
              <ShieldCheck className="h-4 w-4 text-[color:var(--gold-soft)]" />
              Existing client support
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs text-muted-foreground"
          >
            <Stat label="Years of brokerage" value="22+" />
            <Divider />
            <Stat label="Insurer partners" value="14" />
            <Divider />
            <Stat label="Avg. quote turnaround" value="<24h" />
          </motion.div>
        </motion.div>
      </Container>

      {/* Soft hairline at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/30 to-transparent" />
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="font-display text-2xl text-foreground">{value}</span>
      <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
    </div>
  );
}

function Divider() {
  return <span className="hidden h-6 w-px bg-[color:var(--hairline)] sm:inline-block" />;
}
