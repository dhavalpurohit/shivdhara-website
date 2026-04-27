"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, Target, TrendingUp, ShieldCheck, Award } from "lucide-react";

const MISSION_POINTS = [
  {
    icon: ShieldCheck,
    title: "Transparency & Reliability",
    description: "Provide transparent and reliable financial services to our clients."
  },
  {
    icon: TrendingUp,
    title: "Long-term Wealth",
    description: "Help clients achieve long-term wealth creation through disciplined investing."
  },
  {
    icon: Target,
    title: "Expert Strategies",
    description: "Offer expert investment strategies tailored to individual risk profiles."
  },
  {
    icon: Award,
    title: "Ethical Practices",
    description: "Maintain the highest standards of ethical and professional practices."
  }
];

export const Mission = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-primary">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to empower individuals and businesses with the knowledge, tools, and personalized advice they need to achieve their financial aspirations. We are committed to building lasting relationships based on trust, performance, and integrity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {MISSION_POINTS.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-accent/30 border border-border group hover:border-secondary transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-secondary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <point.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
