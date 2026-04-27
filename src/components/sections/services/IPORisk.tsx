"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ShieldAlert } from "lucide-react";

export const IPORisk = () => {
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
            <h3 className="text-xl font-bold text-primary italic">IPO Risk Disclosure</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              IPO investments are subject to significant market risks. Allotment is not guaranteed and is subject to oversubscription levels and SEBI regulations. The listing price of the shares may be lower than the issue price due to market volatility. Investors should carefully review the Red Herring Prospectus (RHP), company financial documents, risk factors, and investment suitability before applying. Past performance of the primary market does not guarantee future results.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
