"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Rocket, TrendingUp, Briefcase, PieChart, Globe } from "lucide-react";

const REASONS = [
  {
    icon: Rocket,
    title: "Invest Early",
    description: "Get in on the ground floor of emerging companies before they become widely discovered by the general market."
  },
  {
    icon: TrendingUp,
    title: "Capital Growth",
    description: "Strong companies often experience significant listing gains and sustained capital appreciation post-IPO."
  },
  {
    icon: Briefcase,
    title: "New Ventures",
    description: "Participate in the growth stories of innovative startups and expanding enterprises entering the public market."
  },
  {
    icon: PieChart,
    title: "Diversification",
    description: "Add a new dimension to your portfolio by exposing your capital to fresh sectors and dynamic business models."
  },
  {
    icon: Globe,
    title: "Market Access",
    description: "Gain direct access to previously restricted equity in high-growth companies transitioning to public ownership."
  }
];

export const WhyIPO = () => {
  return (
    <section className="py-24 bg-accent/20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Opportunities</h2>
          <h3 className="text-4xl font-bold text-primary">Why Invest in IPOs?</h3>
          <p className="text-muted-foreground text-lg">
            Initial Public Offerings present a unique window to capitalize on the public debut of robust companies.
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
              className="p-8 rounded-3xl bg-white border border-border group hover:border-secondary/50 transition-colors shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:scale-110 transition-transform">
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
