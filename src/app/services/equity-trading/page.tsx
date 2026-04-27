import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/seo";
import { EquityIntro } from "@/components/sections/services/EquityIntro";
import { WhyEquity } from "@/components/sections/services/WhyEquity";
import { EquityServices } from "@/components/sections/services/EquityServices";
import { EquityBenefits } from "@/components/sections/services/EquityBenefits";
import { TradingSteps } from "@/components/sections/services/TradingSteps";
import { RiskDisclaimer } from "@/components/sections/services/RiskDisclaimer";
import { EquityCTA } from "@/components/sections/services/EquityCTA";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Equity Trading Services | Shivdhara Securities",
  description:
    "Trade confidently in the stock market with expert guidance, professional research, and reliable execution support from Shivdhara Securities.",
});

const EquityHero = () => {
  return (
    <section className="relative md:h-[500px] h-auto pb-5 md:pb-0 flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 pt-20">
      <Container className="relative z-10">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Equity <span className="text-secondary">Trading</span> Services
          </h1>
          <p className="text-xl text-blue-100/90 leading-relaxed">
            Trade confidently in the stock market with expert guidance and
            reliable execution support tailored for your financial success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 group"
            >
              Open Trading Account
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </Container>
      {/* Abstract Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 skew-x-12 transform translate-x-20 -z-10" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default function EquityTradingPage() {
  return (
    <main className="overflow-hidden">
      <EquityHero />
      <EquityIntro />
      <WhyEquity />
      <EquityServices />
      <EquityBenefits />
      <TradingSteps />
      <RiskDisclaimer />
      <EquityCTA />
    </main>
  );
}
