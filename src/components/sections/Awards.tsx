"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Award, Star, Users } from "lucide-react";

const AWARDS = [
  {
    icon: Star,
    title: "Best Investment Advisor",
    year: "2023",
    description: "Recognized for excellence in investment advisory and portfolio management."
  },
  {
    icon: Award,
    title: "Trusted Financial Partner",
    year: "2022",
    description: "Awarded for maintain high standards of transparency and client trust."
  },
  {
    icon: Users,
    title: "Customer Excellence Award",
    year: "2021",
    description: "Honored for providing outstanding support and relationship management."
  }
];

export const Awards = () => {
  return (
    <section className="py-24 bg-accent/20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-primary">Awards & Recognition</h2>
          <p className="text-muted-foreground text-lg">
            Our commitment to excellence has been recognized by industry leaders and our valued clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AWARDS.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-shadow border border-border group text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all">
                <award.icon className="w-8 h-8" />
              </div>
              <div className="text-secondary font-bold text-lg mb-2">{award.year}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{award.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
