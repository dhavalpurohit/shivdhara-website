import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/seo";
import { PMSIntro } from "@/components/sections/services/PMSIntro";
import { PMSTypes } from "@/components/sections/services/PMSTypes";
import { WhyPMS } from "@/components/sections/services/WhyPMS";
import { PMSApproach } from "@/components/sections/services/PMSApproach";
import { PMSBenefits } from "@/components/sections/services/PMSBenefits";
import { PMSAudience } from "@/components/sections/services/PMSAudience";
import { PMSProcess } from "@/components/sections/services/PMSProcess";
import { PMSRisk } from "@/components/sections/services/PMSRisk";
import { PMSCTA } from "@/components/sections/services/PMSCTA";
import Link from "next/link";
import { ArrowRight, Crown } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Portfolio Management Services | Shivdhara Securities",
  description:
    "Discover personalized Portfolio Management Services (PMS) at Shivdhara Securities. Build customized investment strategies with expert portfolio management.",
});

const PMSHero = () => {
  return (
    <section className="relative md:h-[500px] h-auto pb-5 md:pb-0 flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 pt-20">
      <Container className="relative z-10">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-bold uppercase tracking-wider border border-white/20">
            <Crown size={16} />
            Exclusive Wealth Management
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Portfolio Management{" "}
            <span className="text-secondary">Services</span>
          </h1>
          <p className="text-xl text-blue-100/90 leading-relaxed">
            Highly personalized investment strategies designed exclusively to
            help grow, protect, and preserve your wealth across generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 group"
            >
              Get Portfolio Consultation
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </Container>
      {/* Abstract Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 skew-x-12 transform translate-x-20 -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default function PMSPage() {
  return (
    <main className="overflow-hidden">
      <PMSHero />
      <PMSIntro />
      <PMSTypes />
      <WhyPMS />
      <PMSApproach />
      <PMSBenefits />
      <PMSAudience />
      <PMSProcess />
      <PMSRisk />
      <PMSCTA />
    </main>
  );
}
