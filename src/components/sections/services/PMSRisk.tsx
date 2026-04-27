"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ShieldAlert } from "lucide-react";

export const PMSRisk = () => {
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
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
              <ShieldAlert className="w-7 h-7" />
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-primary italic">Portfolio Management Risk Disclosure</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Investments in securities through Portfolio Management Services (PMS) are subject to market risks, and there is no assurance or guarantee that the objectives of the investments will be achieved. The portfolio values may fluctuate based on macroeconomic factors and market conditions. Investors are advised to carefully read the Disclosure Document and understand the risk factors associated with the specific investment strategy before investing. Past performance of the portfolio manager does not indicate the future performance of any current or future strategy.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
