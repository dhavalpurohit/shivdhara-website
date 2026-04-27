import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/seo";
import { MutualIntro } from "@/components/sections/services/MutualIntro";
import { MutualTypes } from "@/components/sections/services/MutualTypes";
import { WhyMutualFunds } from "@/components/sections/services/WhyMutualFunds";
import { MutualServices } from "@/components/sections/services/MutualServices";
import { SIPBenefits } from "@/components/sections/services/SIPBenefits";
import { MutualSteps } from "@/components/sections/services/MutualSteps";
import { MutualRisk } from "@/components/sections/services/MutualRisk";
import { MutualCTA } from "@/components/sections/services/MutualCTA";
import Link from "next/link";
import { ArrowRight, PieChart } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Mutual Fund Investment Services | Shivdhara Securities",
  description:
    "Explore mutual fund investment services at Shivdhara Securities. Invest through SIP or lump-sum with expert support and guidance tailored to your goals.",
});

const MutualHero = () => {
  return (
    <section className="relative h-[500px] flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 pt-20">
      <Container className="relative z-10">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-bold uppercase tracking-wider border border-white/20">
            <PieChart size={16} />
            Wealth Management
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Mutual Fund <span className="text-secondary">Investment</span>{" "}
            Services
          </h1>
          <p className="text-xl text-blue-100/90 leading-relaxed">
            Grow your wealth steadily with professionally managed mutual fund
            investments tailored to your risk appetite and financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 group"
            >
              Start SIP Investment
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

export default function MutualFundsPage() {
  return (
    <main className="overflow-hidden">
      <MutualHero />
      <MutualIntro />
      <MutualTypes />
      <WhyMutualFunds />
      <MutualServices />
      <SIPBenefits />
      <MutualSteps />
      <MutualRisk />
      <MutualCTA />
    </main>
  );
}
