"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  CheckCircle2,
  Lock,
  Percent,
  Calendar,
  Wallet,
  ShieldCheck,
} from "lucide-react";

const BENEFITS = [
  {
    icon: Lock,
    title: "Guaranteed Returns",
    description:
      "Unlike market-linked instruments, FDs offer a fixed interest rate for the entire tenure.",
  },
  {
    icon: ShieldCheck,
    title: "Low Investment Risk",
    description:
      "Investments with top-rated banks and corporations are protected and highly secure.",
  },
  {
    icon: Calendar,
    title: "Flexible Tenure",
    description:
      "Choose an investment period ranging from 12 months to 10 years based on your liquidity needs.",
  },
  {
    icon: Percent,
    title: "Regular Income",
    description:
      "Option to receive interest payments monthly, quarterly, or annually for consistent cash flow.",
  },
  {
    icon: Wallet,
    title: "Capital Safety",
    description:
      "Ideal for preserving your principal amount while earning a steady growth rate.",
  },
];

export const FDBenefits = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">
            Fixed Deposits
          </h2>
          <h3 className="text-4xl font-bold text-primary">
            Benefits of Investing in FDs
          </h3>
          <p className="text-muted-foreground text-lg">
            Fixed deposits provide the ultimate peace of mind with guaranteed
            growth and flexible payout options.
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
              <h4 className="text-xl font-bold text-primary mb-3">
                {benefit.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
