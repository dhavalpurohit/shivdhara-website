"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AlertCircle } from "lucide-react";

export const RiskDisclaimer = () => {
  return (
    <section className="py-12 bg-accent/20 border-y border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left"
        >
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
              <AlertCircle className="w-7 h-7" />
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-primary italic">Risk Disclosure</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Investments in the securities market are subject to market risks. Investors should carefully read all related documents and understand the risks involved before investing. Past performance is not an indicator of future returns. Shivdhara Securities and its associates are not responsible for any losses arising from investment decisions made based on the information provided here.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
