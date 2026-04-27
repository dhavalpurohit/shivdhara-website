"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BookOpen, Scale, Clock, Calculator, PieChart } from "lucide-react";

const SERVICES = [
  {
    icon: BookOpen,
    title: "Bond Investment Guidance",
    description: "Expert advice on selecting high-grade government and corporate bonds that align with your risk profile."
  },
  {
    icon: Scale,
    title: "Fixed Deposit Comparison",
    description: "We help you compare FD rates across top banks and NBFCs to ensure you get the best possible returns."
  },
  {
    icon: Clock,
    title: "Tenure Planning Assistance",
    description: "Strategic planning to ladder your investments, ensuring liquidity when you need it without sacrificing yield."
  },
  {
    icon: Calculator,
    title: "Interest Optimization",
    description: "Guidance on cumulative vs. non-cumulative options to match your cash flow and tax requirements."
  },
  {
    icon: PieChart,
    title: "Portfolio Diversification",
    description: "Integrating fixed-income assets seamlessly into your broader investment portfolio to reduce overall volatility."
  }
];

export const BondServices = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Our Offerings</h2>
          <h3 className="text-4xl font-bold text-primary">Our Investment Services</h3>
          <p className="text-muted-foreground text-lg">
            We provide comprehensive support to help you maximize safety and returns in the fixed-income market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-accent/30 border border-border hover:border-secondary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:bg-secondary group-hover:text-white transition-all">
                <service.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{service.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
