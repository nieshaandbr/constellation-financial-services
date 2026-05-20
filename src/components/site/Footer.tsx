import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Protect",
    items: [
      { label: "Personal vehicles", to: "/protect" },
      { label: "Commercial fleet", to: "/fleet" },
      { label: "Property", to: "/protect" },
      { label: "Business assets", to: "/protect" },
    ],
  },
  {
    title: "Service",
    items: [
      { label: "Get a quote", to: "/quote" },
      { label: "Existing client", to: "/support" },
      { label: "Claims support", to: "/claims" },
    ],
  },
  {
    title: "Brokerage",
    items: [
      { label: "About", to: "/about" },
      { label: "Consultants", to: "/about" },
      { label: "Contact", to: "/support" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--hairline)] bg-[color:var(--surface)]">
      <Container className="py-20">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="space-y-6">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              A Johannesburg brokerage built around relationships. Protection structured for the
              people, vehicles and operations that move your life forward.
            </p>
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <p>Sandton · Johannesburg · South Africa</p>
              <p>Office hours · Mon–Fri · 08:00–17:00</p>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="eyebrow mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.items.map((i) => (
                  <li key={i.label}>
                    <Link
                      to={i.to}
                      className="text-sm text-foreground/80 transition-colors hover:text-[color:var(--gold)]"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="gold-divider mt-16" />

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Constellation Financial Services. An authorised FSP.</p>
          <p>Authorised Financial Services Provider · FSP No. 00000</p>
        </div>
      </Container>
    </footer>
  );
}
