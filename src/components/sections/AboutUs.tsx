"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

import OfficeImage1 from "@/public/images/aboutus/office-image-1.png";
export const AboutUs = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-primary">Who We Are</h2>
              <div className="h-1.5 w-20 bg-secondary rounded-full" />
            </div>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Shivdhara Securities is a trusted financial advisory and
                investment services firm dedicated to helping clients grow their
                wealth with confidence. We specialize in equity trading, mutual
                funds, bonds, and portfolio management services.
              </p>
              <p>
                With over a decade of experience in the Indian financial
                markets, we have built a reputation for excellence, integrity,
                and personalized service. Our approach combines deep market
                insights with a thorough understanding of our clients' unique
                financial goals.
              </p>
              <p>
                We believe in transparency, reliability, and long-term financial
                growth for our clients. Whether you are a seasoned investor or
                just starting your journey, we provide the tools and guidance
                you need to navigate the complexities of the market.
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
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <div className="absolute inset-0 bg-primary/10 animate-pulse" />
              <Image
                src={OfficeImage1}
                alt="Shivdhara Securities Office"
                fill
                className="object-cover"
                unoptimized // Placeholder
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-secondary/30 rounded-2xl -z-0" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
