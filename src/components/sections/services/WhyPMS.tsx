"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Target, TrendingUp, Search, ShieldCheck, PieChart } from "lucide-react";

const REASONS = [
  {
    icon: Target,
    title: "Personalized Strategies",
    description: "Your portfolio is built from scratch, specifically tailored to your unique financial goals and risk appetite."
  },
  {
    icon: TrendingUp,
    title: "Professional Management",
    description: "Benefit from the expertise of seasoned fund managers who actively monitor and adjust your investments."
  },
  {
    icon: Search,
    title: "Active Portfolio Monitoring",
    description: "Continuous oversight ensures your investments are always aligned with changing market conditions."
  },
  {
    icon: ShieldCheck,
    title: "Risk-Managed Investments",
    description: "Advanced risk mitigation strategies are employed to protect your capital during market downturns."
  },
  {
    icon: PieChart,
    title: "Goal-Based Planning",
    description: "Every investment decision is driven by your long-term objectives, ensuring you stay on track."
  }
];

export const WhyPMS = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">The Edge</h2>
          <h3 className="text-4xl font-bold text-primary">Why Choose PMS?</h3>
          <p className="text-muted-foreground text-lg">
            Experience a superior level of wealth management designed exclusively for discerning investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {REASONS.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-accent/30 border border-border group hover:border-secondary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <reason.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{reason.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
