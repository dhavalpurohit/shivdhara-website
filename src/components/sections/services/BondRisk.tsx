"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ShieldAlert } from "lucide-react";

export const BondRisk = () => {
  return (
    <section className="py-12 bg-white border-y border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left"
        >
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
              <ShieldAlert className="w-7 h-7" />
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-primary italic">Investment Safety Information</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Although bonds and fixed deposits are widely considered stable and secure investments, investors should carefully review the terms, lock-in tenure, and issuer credibility before investing. Credit ratings may change over time, and interest rates or returns may vary depending on macroeconomic and institutional conditions. Early withdrawal may be subject to penalties.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
