"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const BENEFITS = [
  "Inculcates a disciplined investment habit",
  "Affordable monthly contributions (starting as low as ₹500)",
  "Harnesses the immense power of compounding over time",
  "Benefit from Rupee Cost Averaging during market volatility",
  "Automated investments for stress-free wealth growth",
  "Goal-focused approach for predictable financial outcomes"
];

export const SIPBenefits = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-square bg-accent/20 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white">
              <div className="absolute inset-0 bg-primary/5 animate-pulse" />
              <Image
                src="/images/services/sip-benefits.jpg"
                alt="Benefits of SIP Investment"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Growth Strategy</h2>
              <h3 className="text-4xl font-bold text-primary">SIP Investment Benefits</h3>
              <p className="text-muted-foreground text-lg">
                Systematic Investment Plans (SIP) are the most effective way for long-term wealth creation, allowing you to invest small amounts with big results.
              </p>
            </div>
            <ul className="space-y-4">
              {BENEFITS.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-accent/30 border border-border/50 group hover:border-secondary transition-colors"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-primary font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
