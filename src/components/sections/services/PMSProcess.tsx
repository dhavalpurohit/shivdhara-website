"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { UserPlus, Wallet, Briefcase, ActivitySquare } from "lucide-react";

const PROCESS_STEPS = [
  {
    icon: UserPlus,
    title: "Open PMS Account",
    description: "Our dedicated relationship manager will assist you in completing the required documentation and establishing your unique investment mandate."
  },
  {
    icon: Wallet,
    title: "Fund Investment Portfolio",
    description: "Transfer funds or existing securities into your new PMS Demat account to provide the initial capital base."
  },
  {
    icon: Briefcase,
    title: "Portfolio Creation",
    description: "The portfolio manager begins constructing your tailored portfolio, executing trades based on the agreed-upon strategy."
  },
  {
    icon: ActivitySquare,
    title: "Portfolio Monitoring",
    description: "Continuous oversight, active rebalancing, and transparent reporting ensure your investments remain optimized for growth."
  }
];

export const PMSProcess = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Getting Started</h2>
          <h3 className="text-4xl font-bold text-primary">How PMS Works</h3>
          <p className="text-muted-foreground text-lg">
            A seamless, white-glove onboarding process to initiate your personalized wealth management journey.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-accent -translate-y-12 -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-accent flex items-center justify-center text-primary shadow-xl group-hover:border-secondary transition-all relative z-10">
                    <step.icon className="w-10 h-10 group-hover:text-secondary transition-colors" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute top-0 right-0 -translate-y-2 translate-x-2 w-8 h-8 rounded-full bg-secondary text-white font-bold flex items-center justify-center text-sm z-20 shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed px-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
