import { Container } from "./Container";

import Momentum from "../../assets/Momentum.svg";
import Discovery from "../../assets/Discovery.svg";
import OldMutual from "../../assets/OldMutual.svg";
import Santam from "../../assets/Santam.svg";
import MiWay from "../../assets/MiWay.svg"
import AutoGeneral from "../../assets/Auto&General.svg"

const partners = [
  {
    name: "Discovery Insure",
    logo: Discovery,
  },
  {
    name: "First For Women",
    logo: AutoGeneral,
  },
  {
    name: "Mi Way insurance",
    logo: MiWay,
  },
  {
    name: "Santam",
    logo: Santam,
  },
  {
    name: "Momentum",
    logo: Momentum,
  },
  {
    name: "Old Mutual",
    logo: OldMutual,
  },
];

function LogoRow() {
  return (
    <div className="flex items-center gap-20 pr-20">
      {partners.map((partner) => (
        <div
          key={partner.name}
          className="group flex h-12 min-w-[180px] items-center justify-center"
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className="h-8 w-auto object-contain opacity-60 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(61%) sepia(29%) saturate(524%) hue-rotate(8deg) brightness(91%) contrast(87%)",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export function TrustStrip() {
  return (
    <section className="relative overflow-hidden border-y border-[color:var(--hairline)] bg-[color:var(--surface)]/40 py-14">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">

          {/* Heading */}
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Working alongside South Africa&apos;s leading insurers
          </p>

          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[color:var(--background)] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[color:var(--background)] to-transparent" />

          {/* Marquee */}
          <div className="relative flex w-full overflow-hidden">

            <div className="animate-marquee flex shrink-0">
              <LogoRow />
              <LogoRow />
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}