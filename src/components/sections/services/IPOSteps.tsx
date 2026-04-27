"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { UserPlus, MousePointerClick, Send, Clock, TrendingUp } from "lucide-react";

const STEPS = [
  {
    icon: UserPlus,
    title: "Open Demat Account",
    description: "Ensure your Demat and trading accounts are active and KYC compliant."
  },
  {
    icon: MousePointerClick,
    title: "Select IPO",
    description: "Review our research reports and choose an upcoming IPO that fits your goals."
  },
  {
    icon: Send,
    title: "Submit Application",
    description: "Apply easily through our digital platform using UPI as your payment mandate."
  },
  {
    icon: Clock,
    title: "Wait for Allotment",
    description: "Funds remain blocked in your bank account until the allotment status is finalized."
  },
  {
    icon: TrendingUp,
    title: "Track Listing",
    description: "If allotted, shares are credited to your Demat account, ready for listing day."
  }
];

export const IPOSteps = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Process</h2>
          <h3 className="text-4xl font-bold text-primary">How to Apply for an IPO</h3>
          <p className="text-muted-foreground text-lg">
            A simple, digital, and transparent process to participate in primary market offerings.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-accent ml-6 md:ml-12 space-y-12 pb-4">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-10 md:pl-16 group"
              >
                {/* Timeline Dot with Icon */}
                <div className="absolute left-0 top-0 -translate-x-[calc(50%+1px)] w-12 h-12 rounded-full bg-white border-2 border-accent flex items-center justify-center shadow-lg group-hover:border-secondary group-hover:text-secondary transition-colors z-10">
                  <step.icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                </div>
                
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border group-hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-secondary font-bold text-sm">STEP 0{index + 1}</div>
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">{step.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
