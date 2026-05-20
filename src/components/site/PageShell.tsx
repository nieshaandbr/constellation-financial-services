import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import type { ReactNode } from "react";
import { Container } from "./Container";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="relative overflow-hidden pt-40 pb-16">
          <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[color:var(--gold)]/[0.07] blur-[140px]" />
          <Container>
            <p className="eyebrow mb-5">{eyebrow}</p>
            <h1 className="max-w-3xl text-4xl leading-[1.05] sm:text-6xl">{title}</h1>
            {intro && <p className="mt-6 max-w-xl text-muted-foreground">{intro}</p>}
          </Container>
        </section>
        <div className="gold-divider" />
        {children}
      </main>
      <Footer />
    </div>
  );
}
