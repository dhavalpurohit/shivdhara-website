"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const BENEFITS = [
  "Professional market research and technical support",
  "Transparent and competitive brokerage structure",
  "High-speed, reliable trade execution platforms",
  "Personalized investment advice from market experts",
  "Dedicated relationship managers for priority support",
  "Safe and secure depository participant services"
];

export const EquityBenefits = () => {
  return (
    <section className="py-24 bg-accent/20 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <div className="absolute inset-0 bg-primary/5 animate-pulse" />
              <Image
                src="/images/services/trading-benefits.jpg"
                alt="Benefits of Trading with Shivdhara"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-primary">Benefits of Trading With Us</h2>
              <p className="text-muted-foreground text-lg">
                We go beyond just being a broker; we are your partners in financial growth, providing a professional edge to your trading.
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
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-border/50 group hover:border-secondary transition-colors"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
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
