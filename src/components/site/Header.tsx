import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

const nav = [
  { label: "What we protect", to: "/protect" },
  { label: "Fleet", to: "/fleet" },
  { label: "Claims", to: "/claims" },
  { label: "About", to: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-[color:var(--hairline)] bg-background/70 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/support"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Existing client
          </Link>
          <Link
            to="/quote"
            className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-gradient-to-b from-[color:var(--gold)]/15 to-transparent px-5 py-2 text-sm text-[color:var(--gold)] transition-all hover:border-[color:var(--gold)]/70 hover:shadow-[var(--shadow-glow)]"
          >
            Get a quote
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-[color:var(--hairline)] bg-background/95 backdrop-blur-xl">
          <Container className="flex flex-col gap-1 py-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/support" onClick={() => setOpen(false)} className="py-3 text-muted-foreground">
              Existing client support
            </Link>
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full border border-[color:var(--gold)]/40 bg-gradient-to-b from-[color:var(--gold)]/15 to-transparent px-5 py-3 text-sm text-[color:var(--gold)]"
            >
              Get a quote →
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
