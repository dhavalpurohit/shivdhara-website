"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Landmark, Building2, ShieldCheck, Construction } from "lucide-react";

const BOND_TYPES = [
  {
    icon: Landmark,
    title: "Government Bonds",
    description: "Issued by the central or state government. These are the safest debt instruments with virtually zero default risk."
  },
  {
    icon: Building2,
    title: "Corporate Bonds",
    description: "Debt securities issued by private and public corporations. Typically offer higher interest rates than government bonds."
  },
  {
    icon: ShieldCheck,
    title: "Tax-Free Bonds",
    description: "Usually issued by government-backed entities. The interest earned is completely exempt from income tax."
  },
  {
    icon: Construction,
    title: "Infrastructure Bonds",
    description: "Specialized bonds issued by infrastructure companies or government agencies to fund major development projects."
  }
];

export const BondTypes = () => {
  return (
    <section className="py-24 bg-accent/20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Options</h2>
          <h3 className="text-4xl font-bold text-primary">Types of Bond Investments</h3>
          <p className="text-muted-foreground text-lg">
            Explore a diverse range of debt instruments tailored for safety and tax-efficient income generation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BOND_TYPES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white rounded-2xl shadow-sm border border-border hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                <item.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
