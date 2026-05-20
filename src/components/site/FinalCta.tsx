import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "./Container";
import cityImg from "@/assets/city.jpg";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden py-32">
      <div className="absolute inset-0 -z-10">
        <img
          src={cityImg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-30"
          loading="lazy"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--gold)]/10 blur-[160px]" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6">Speak to a consultant</p>
          <h2 className="text-4xl leading-[1.05] sm:text-6xl">
            Real protection begins with
            <br />
            <span className="italic text-[color:var(--gold-soft)]">a real conversation</span>.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-muted-foreground">
            Whether you're getting cover for the first time or moving from another broker, your
            consultant is one form away.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/quote"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-8 py-4 text-sm font-medium text-[color:var(--primary-foreground)] shadow-[var(--shadow-glow)]"
            >
              Get a quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/support"
              className="rounded-full border border-[color:var(--hairline)] bg-white/[0.02] px-8 py-4 text-sm text-foreground transition-colors hover:border-foreground/30"
            >
              Existing client support
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
