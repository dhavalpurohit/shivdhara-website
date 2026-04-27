"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export const PMSIntro = () => {
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
                Exclusive Wealth Management
              </h2>
              <h3 className="text-4xl font-bold text-primary">
                What is Portfolio Management Services?
              </h3>
            </div>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Portfolio Management Services (PMS) is a sophisticated, highly personalized investment solution tailored for high-net-worth individuals (HNIs) and institutional clients. Unlike mutual funds, where money is pooled, PMS allows you to own individual securities directly in your name while a professional portfolio manager makes the day-to-day investment decisions.
              </p>
              <p>
                The primary objective of PMS is to create a customized portfolio that strictly aligns with your specific financial goals, risk tolerance, and investment horizon. It offers a level of agility and exclusivity that standard investment products cannot match.
              </p>
              <p>
                At Shivdhara Securities, our PMS division provides active portfolio monitoring, rigorous institutional-grade research, and disciplined investment strategies designed to optimize long-term returns and preserve intergenerational wealth.
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
            <div className="aspect-[4/3] bg-gradient-to-tr from-primary/10 to-accent/30 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white">
              <div className="absolute inset-0 bg-primary/5 animate-pulse" />
              <Image
                src="/images/services/portfolio-management.jpg"
                alt="Portfolio Management Services"
                fill
                className="object-cover mix-blend-overlay opacity-80"
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
