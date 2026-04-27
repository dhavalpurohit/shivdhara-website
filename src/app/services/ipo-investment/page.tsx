import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/seo";
import { IPOIntro } from "@/components/sections/services/IPOIntro";
import { WhyIPO } from "@/components/sections/services/WhyIPO";
import { IPOServices } from "@/components/sections/services/IPOServices";
import { IPOAdvantages } from "@/components/sections/services/IPOAdvantages";
import { IPOSteps } from "@/components/sections/services/IPOSteps";
import { UpcomingIPO } from "@/components/sections/services/UpcomingIPO";
import { IPORisk } from "@/components/sections/services/IPORisk";
import { IPOCTA } from "@/components/sections/services/IPOCTA";
import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "IPO Investment Services | Shivdhara Securities",
  description: "Apply for IPO investments with expert assistance from Shivdhara Securities. Learn about upcoming IPOs and invest with confidence.",
});

const IPOHero = () => {
  return (
    <section className="relative h-[500px] flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 pt-20">
      <Container className="relative z-10">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-bold uppercase tracking-wider border border-white/20">
            <Send size={16} />
            Primary Market
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            IPO Investment <span className="text-secondary">Services</span>
          </h1>
          <p className="text-xl text-blue-100/90 leading-relaxed">
            Invest early in promising companies and unlock new wealth creation opportunities with our expert guidance and seamless application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 group"
            >
              Apply for IPO
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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

export default function IPOPage() {
  return (
    <main className="overflow-hidden">
      <IPOHero />
      <IPOIntro />
      <WhyIPO />
      <IPOServices />
      <IPOAdvantages />
      <IPOSteps />
      <UpcomingIPO />
      <IPORisk />
      <IPOCTA />
    </main>
  );
}
