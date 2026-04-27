"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export const EquityIntro = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">
                Introduction
              </h2>
              <h3 className="text-4xl font-bold text-primary">
                What is Equity Trading?
              </h3>
            </div>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Equity trading involves the process of buying and selling shares of publicly listed companies on stock exchanges like NSE and BSE. When you buy a share, you are essentially purchasing a piece of ownership in that company, entitling you to a portion of its assets and earnings.
              </p>
              <p>
                This dynamic market enables investors to participate directly in the growth story of successful businesses. Through capital appreciation—where the value of your shares increases over time—and dividends, equity trading serves as a powerful engine for building long-term sustainable wealth.
              </p>
              <p>
                At Shivdhara Securities, we simplify this journey by providing the research, tools, and execution support you need to navigate the markets with confidence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-accent/20 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white">
              <div className="absolute inset-0 bg-primary/5 animate-pulse" />
              <Image
                src="/images/services/equity-intro.jpg"
                alt="Equity Trading Concept"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            {/* Decorative dot grid */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
