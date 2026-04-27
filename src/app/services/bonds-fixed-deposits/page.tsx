import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/seo";
import { BondIntro } from "@/components/sections/services/BondIntro";
import { BondTypes } from "@/components/sections/services/BondTypes";
import { FDBenefits } from "@/components/sections/services/FDBenefits";
import { WhyBondsFD } from "@/components/sections/services/WhyBondsFD";
import { BondServices } from "@/components/sections/services/BondServices";
import { BondSteps } from "@/components/sections/services/BondSteps";
import { BondRisk } from "@/components/sections/services/BondRisk";
import { BondCTA } from "@/components/sections/services/BondCTA";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Bonds & Fixed Deposits Investment Services | Shivdhara Securities",
  description:
    "Explore secure investment options with bonds and fixed deposits at Shivdhara Securities. Invest safely with stable returns and expert support.",
});

const BondsHero = () => {
  return (
    <section className="relative md:h-[500px] h-auto pb-5 md:pb-0 flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 pt-20">
      <Container className="relative z-10">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-bold uppercase tracking-wider border border-white/20">
            <ShieldCheck size={16} />
            Secure Investments
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Bonds & <span className="text-secondary">Fixed Deposit</span>{" "}
            Investments
          </h1>
          <p className="text-xl text-blue-100/90 leading-relaxed">
            Secure your financial future with stable, reliable, and predictable
            investment options tailored to protect your wealth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 group"
            >
              Invest Safely Today
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

export default function BondsFDsPage() {
  return (
    <main className="overflow-hidden">
      <BondsHero />
      <BondIntro />
      <BondTypes />
      <FDBenefits />
      <WhyBondsFD />
      <BondServices />
      <BondSteps />
      <BondRisk />
      <BondCTA />
    </main>
  );
}
