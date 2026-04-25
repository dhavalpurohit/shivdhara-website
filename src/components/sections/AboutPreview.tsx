"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const AboutPreview = () => {
  const points = [
    "Over 12 years of market excellence",
    "SEBI Registered Investment Advisor",
    "Personalized portfolio strategies",
    "Advanced technical research & analysis",
  ];

  return (
    <section className="py-24 bg-accent/20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <SectionTitle
              title="A Legacy of Trust and Transparency"
              subtitle="Founded in 2010, Shivdhara Securities has been at the forefront of financial innovation, helping thousands of families achieve their financial dreams."
            />
            
            <div className="space-y-4 mb-10">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary" />
                  <span className="text-primary font-medium">{point}</span>
                </div>
              ))}
            </div>

            <Button variant="outline">Read Our Full Story</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-square bg-primary rounded-2xl flex items-center justify-center p-8 overflow-hidden relative">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay" />
               <div className="relative z-10 text-center">
                  <span className="text-secondary text-8xl font-bold block mb-2">10+</span>
                  <span className="text-white text-2xl font-semibold">City Presence</span>
               </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-2xl -z-10" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
