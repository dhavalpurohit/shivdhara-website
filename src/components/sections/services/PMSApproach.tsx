"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Lightbulb, Activity, PenTool, Eye, RefreshCw } from "lucide-react";

const APPROACH_STEPS = [
  {
    icon: Lightbulb,
    title: "Understand Client Goals",
    description: "We begin with a deep dive into your financial aspirations, time horizons, and liquidity requirements."
  },
  {
    icon: Activity,
    title: "Analyze Risk Profile",
    description: "A comprehensive assessment of your risk tolerance to ensure our strategies align with your comfort level."
  },
  {
    icon: PenTool,
    title: "Design Customized Portfolio",
    description: "Our experts craft a bespoke asset allocation strategy, handpicking securities that fit your unique profile."
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description: "Your portfolio is actively managed and monitored daily to respond swiftly to market movements."
  },
  {
    icon: RefreshCw,
    title: "Periodic Performance Review",
    description: "Regular, transparent reporting and strategy realignments to keep your investments on the optimal path."
  }
];

export const PMSApproach = () => {
  return (
    <section className="py-24 bg-accent/20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Methodology</h2>
          <h3 className="text-4xl font-bold text-primary">Our Investment Approach</h3>
          <p className="text-muted-foreground text-lg">
            A structured, disciplined five-step process designed to deliver consistent, superior risk-adjusted returns.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-border ml-6 md:ml-12 space-y-12 pb-4">
            {APPROACH_STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-10 md:pl-16 group"
              >
                {/* Timeline Dot with Icon */}
                <div className="absolute left-0 top-0 -translate-x-[calc(50%+1px)] w-12 h-12 rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-lg group-hover:border-secondary group-hover:text-secondary transition-colors z-10">
                  <step.icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border group-hover:shadow-md transition-shadow">
                  <div className="text-secondary font-bold text-sm mb-2">STEP 0{index + 1}</div>
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
