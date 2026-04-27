"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { TrendingUp, Droplets, PieChart, Layers } from "lucide-react";

const WHY_EQUITY = [
  {
    icon: TrendingUp,
    title: "Wealth Creation",
    description: "Equities have historically outperformed most asset classes over the long term, offering significant capital appreciation."
  },
  {
    icon: Droplets,
    title: "High Liquidity",
    description: "Stocks are highly liquid assets, allowing you to convert your investments into cash quickly through the exchange."
  },
  {
    icon: PieChart,
    title: "Regular Income",
    description: "Many established companies share their profits with shareholders in the form of regular dividend payments."
  },
  {
    icon: Layers,
    title: "Diversification",
    description: "Gain exposure to various sectors like IT, Pharma, Banking, and Infrastructure with a single trading account."
  }
];

export const WhyEquity = () => {
  return (
    <section className="py-24 bg-accent/20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Advantages</h2>
          <h3 className="text-4xl font-bold text-primary">Why Choose Equity Trading?</h3>
          <p className="text-muted-foreground text-lg">
            Strategic equity investment is a cornerstone of modern wealth management, offering unique benefits for disciplined investors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_EQUITY.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white rounded-2xl shadow-sm border border-border hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
