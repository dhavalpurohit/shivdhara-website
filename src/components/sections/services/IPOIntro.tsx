"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export const IPOIntro = () => {
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
                Primary Market Access
              </h2>
              <h3 className="text-4xl font-bold text-primary">
                What is an IPO?
              </h3>
            </div>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                An Initial Public Offering (IPO) is the landmark process by which a previously private company offers its shares to the public for the first time. This transition from private to public provides early investors an exclusive opportunity to participate in the growth story of promising enterprises.
              </p>
              <p>
                Investing in IPOs allows you to acquire shares directly from the issuing company before they are listed and widely traded on stock exchanges like the NSE or BSE. Historically, well-researched IPOs have provided significant listing gains and substantial long-term capital appreciation.
              </p>
              <p>
                At Shivdhara Securities, we simplify the primary market for you. From detailed fundamental analysis of the issuing company to seamless digital applications, we guide you every step of the way.
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
                src="/images/services/ipo-intro.jpg"
                alt="IPO Investment Concept"
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
