"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Crown, Hourglass, UserCog, Building } from "lucide-react";

const AUDIENCE = [
  {
    icon: Crown,
    title: "High-Net-Worth Individuals",
    description: "HNIs seeking exclusive, bespoke investment strategies tailored to large capital bases and complex financial situations."
  },
  {
    icon: Hourglass,
    title: "Long-Term Investors",
    description: "Individuals focused on intergenerational wealth creation and preservation with a multi-year investment horizon."
  },
  {
    icon: UserCog,
    title: "Investors Seeking Customization",
    description: "Those who find generic mutual funds too restrictive and desire a portfolio built around their specific ethical or financial preferences."
  },
  {
    icon: Building,
    title: "Institutional Clients",
    description: "Corporations, trusts, and family offices requiring professional oversight and rigorous risk management for their treasuries."
  }
];

export const PMSAudience = () => {
  return (
    <section className="py-24 bg-accent/20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Ideal Profile</h2>
          <h3 className="text-4xl font-bold text-primary">Who Should Choose PMS?</h3>
          <p className="text-muted-foreground text-lg">
            Portfolio Management Services are designed for discerning investors who demand more than standardized investment products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {AUDIENCE.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 p-8 bg-white rounded-3xl shadow-sm border border-border hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 shrink-0 bg-accent rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                <audience.icon className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">{audience.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{audience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
