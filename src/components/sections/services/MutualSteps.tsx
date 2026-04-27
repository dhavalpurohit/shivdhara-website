"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ClipboardCheck, Search, Landmark, TrendingUp } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardCheck,
    title: "KYC Registration",
    description: "Complete your one-time KYC verification process to become eligible for mutual fund investments."
  },
  {
    icon: Search,
    title: "Choose Fund",
    description: "Our advisors help you select the most suitable mutual fund schemes based on your risk profile and goals."
  },
  {
    icon: Landmark,
    title: "Select Investment",
    description: "Decide whether you want to start a Systematic Investment Plan (SIP) or make a one-time Lump-sum investment."
  },
  {
    icon: TrendingUp,
    title: "Monitor Growth",
    description: "Track your investment performance through our digital platforms and receive regular portfolio reviews."
  }
];

export const MutualSteps = () => {
  return (
    <section className="py-24 bg-accent/20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Onboarding</h2>
          <h3 className="text-4xl font-bold text-primary">How to Start Investing</h3>
          <p className="text-muted-foreground text-lg">
            A simple, transparent process to get your mutual fund journey started with Shivdhara Securities.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-12 -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 rounded-3xl bg-white border-2 border-border flex items-center justify-center text-primary shadow-xl group-hover:border-secondary transition-all relative z-10">
                    <step.icon className="w-10 h-10 group-hover:text-secondary transition-colors" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-secondary text-white font-bold flex items-center justify-center text-sm z-20 shadow-lg">
                    0{index + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed px-4">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
