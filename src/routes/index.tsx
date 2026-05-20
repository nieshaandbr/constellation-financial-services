import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { ProtectGrid } from "@/components/site/ProtectGrid";
import { WhyConstellation } from "@/components/site/WhyConstellation";
import { FleetSection } from "@/components/site/FleetSection";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ClaimsSupportSection } from "@/components/site/ClaimsSupportSection";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ProtectGrid />
        <WhyConstellation />
        <FleetSection />
        <HowItWorks />
        <ClaimsSupportSection />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
