"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { UserPlus, Fingerprint, Wallet, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: UserPlus,
    title: "Open Account",
    description: "Fill out our simple digital form to initiate your Demat and Trading account opening."
  },
  {
    icon: Fingerprint,
    title: "KYC Verification",
    description: "Complete your paperless E-KYC verification process for quick account activation."
  },
  {
    icon: Wallet,
    title: "Fund Account",
    description: "Transfer funds to your trading account securely via UPI, Net Banking, or NEFT."
  },
  {
    icon: Rocket,
    title: "Start Trading",
    description: "Access our professional platforms and begin your journey in the stock market."
  }
];

export const TradingSteps = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Process</h2>
          <h3 className="text-4xl font-bold text-primary">How to Start Trading</h3>
          <p className="text-muted-foreground text-lg">
            Follow these four simple steps to begin your equity investment journey with Shivdhara Securities.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-accent -translate-y-12 -z-10" />
          
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-accent flex items-center justify-center text-primary mx-auto mb-6 shadow-xl group-hover:border-secondary transition-all relative z-10">
                  <step.icon className="w-10 h-10 group-hover:text-secondary transition-colors" />
                </div>
                {/* Step number badge */}
                <div className="absolute top-0 right-1/2 translate-x-12 w-8 h-8 rounded-full bg-secondary text-white font-bold flex items-center justify-center text-sm z-20">
                  {index + 1}
                </div>
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{step.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
