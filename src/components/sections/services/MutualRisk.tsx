"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AlertTriangle } from "lucide-react";

export const MutualRisk = () => {
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
              <AlertTriangle className="w-7 h-7" />
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-primary italic">Mutual Fund Risk Disclosure</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. The value of units may go up or down depending on the factors and forces affecting the securities laws. Past performance is not an indicator of future results. Shivdhara Securities acts as an intermediary and provides research-backed advisory; final investment decisions rest with the client.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
