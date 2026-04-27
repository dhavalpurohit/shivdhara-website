"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BarChart3, LineChart, PieChart, Activity } from "lucide-react";

const FUND_TYPES = [
  {
    icon: BarChart3,
    title: "Equity Mutual Funds",
    description: "Invest primarily in stocks to achieve high capital appreciation over the long term. Ideal for aggressive investors."
  },
  {
    icon: LineChart,
    title: "Debt Mutual Funds",
    description: "Focus on fixed-income securities like government bonds and corporate debentures for stable and regular returns."
  },
  {
    icon: PieChart,
    title: "Hybrid Mutual Funds",
    description: "A balanced approach that invests in both equity and debt to offer a mix of growth and stability."
  },
  {
    icon: Activity,
    title: "Index Funds",
    description: "Passive funds that track a specific market index like Nifty 50 or Sensex, offering broad market exposure."
  }
];

export const MutualTypes = () => {
  return (
    <section className="py-24 bg-accent/20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Categories</h2>
          <h3 className="text-4xl font-bold text-primary">Types of Mutual Funds</h3>
          <p className="text-muted-foreground text-lg">
            Choose from a variety of fund categories based on your financial goals, investment horizon, and risk tolerance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FUND_TYPES.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white rounded-2xl shadow-sm border border-border hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                <type.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{type.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{type.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
