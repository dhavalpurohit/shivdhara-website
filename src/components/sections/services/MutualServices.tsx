"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { CalendarRange, Coins, ClipboardList, Target, Search, BarChart4 } from "lucide-react";

const SERVICES = [
  {
    icon: CalendarRange,
    title: "SIP Planning",
    description: "Structured investment strategies to help you invest small amounts regularly and build a large corpus."
  },
  {
    icon: Coins,
    title: "Lump-sum Support",
    description: "Expert guidance on timing and fund selection for one-time significant investments."
  },
  {
    icon: ClipboardList,
    title: "Portfolio Review",
    description: "Regular analysis of your existing mutual fund holdings to ensure they are performing as expected."
  },
  {
    icon: Target,
    title: "Goal-based Planning",
    description: "Mapping investments to specific life goals like buying a home, children's education, or retirement."
  },
  {
    icon: Search,
    title: "Fund Selection",
    description: "Deep research into fund performance, expense ratios, and fund manager track records."
  },
  {
    icon: BarChart4,
    title: "Performance Tracking",
    description: "Comprehensive reporting and digital tools to track your investment growth in real-time."
  }
];

export const MutualServices = () => {
  return (
    <section className="py-24 bg-accent/20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-primary">Tailored Mutual Fund Services</h3>
          <p className="text-muted-foreground text-lg">
            We provide end-to-end support, from selecting the right schemes to monitoring your progress toward financial freedom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-border shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                <service.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{service.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
