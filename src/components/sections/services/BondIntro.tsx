"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export const BondIntro = () => {
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
                Safe Havens
              </h2>
              <h3 className="text-4xl font-bold text-primary">
                What Are Bonds & Fixed Deposits?
              </h3>
            </div>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Bonds and fixed deposits (FDs) are cornerstone instruments for conservative and balanced portfolios, offering a layer of security and predictability that equities cannot match. 
              </p>
              <p>
                Bonds are essentially debt instruments where you lend money to an entity (government or corporate) for a defined period at a fixed interest rate. Fixed Deposits, on the other hand, involve placing your capital with a financial institution for a specific tenure, guaranteeing a predetermined return upon maturity.
              </p>
              <p>
                At Shivdhara Securities, we curate a selection of high-rated bonds and institutional FDs, ensuring your capital is protected while generating consistent, reliable income to meet your financial milestones.
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
            <div className="aspect-[4/3] bg-accent/20 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white">
              <div className="absolute inset-0 bg-primary/5 animate-pulse" />
              <Image
                src="/images/services/bonds-intro.jpg"
                alt="Bonds and Fixed Deposits Concept"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
