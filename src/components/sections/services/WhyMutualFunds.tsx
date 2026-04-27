"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ShieldCheck, UserCheck, RefreshCw, TrendingUp, Landmark } from "lucide-react";

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Risk Diversification",
    description: "Spreading investments across multiple stocks and sectors significantly reduces the impact of a single asset's performance."
  },
  {
    icon: UserCheck,
    title: "Professional Management",
    description: "Your money is managed by experienced fund managers who conduct deep research and market analysis."
  },
  {
    icon: RefreshCw,
    title: "Flexibility & SIP",
    description: "Start small with Systematic Investment Plans (SIP) and increase or stop your investments as per your convenience."
  },
  {
    icon: TrendingUp,
    title: "Wealth Creation",
    description: "Harness the power of compounding to build substantial wealth for long-term goals like retirement or education."
  },
  {
    icon: Landmark,
    title: "High Liquidity",
    description: "Most mutual funds offer high liquidity, allowing you to redeem your units and access your money within 1-3 working days."
  }
];

export const WhyMutualFunds = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">The Advantage</h2>
          <h3 className="text-4xl font-bold text-primary">Why Invest in Mutual Funds?</h3>
          <p className="text-muted-foreground text-lg">
            Mutual funds offer a disciplined and efficient way to participate in the capital markets without needing to be an expert yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-accent/30 border border-border group hover:border-secondary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{benefit.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
