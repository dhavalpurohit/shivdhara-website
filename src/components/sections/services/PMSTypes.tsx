"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Briefcase, Handshake, Network } from "lucide-react";

const PMS_TYPES = [
  {
    icon: Briefcase,
    title: "Discretionary PMS",
    description: "The portfolio manager makes independent investment decisions on your behalf based on your predefined risk profile and financial goals. Offers completely hands-free wealth management."
  },
  {
    icon: Handshake,
    title: "Non-Discretionary PMS",
    description: "The portfolio manager suggests investment ideas, but the final decision to execute the trade rests entirely with you. Perfect for investors who want to retain control."
  },
  {
    icon: Network,
    title: "Advisory PMS",
    description: "The portfolio manager acts purely as an investment advisor. The execution of trades and administration of the portfolio remains your responsibility."
  }
];

export const PMSTypes = () => {
  return (
    <section className="py-24 bg-accent/20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Service Models</h2>
          <h3 className="text-4xl font-bold text-primary">Types of Portfolio Management</h3>
          <p className="text-muted-foreground text-lg">
            We offer different levels of engagement to suit your desired level of involvement in the investment process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PMS_TYPES.map((type, index) => (
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
