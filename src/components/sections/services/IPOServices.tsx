"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Send, FileSearch, UserCheck, Activity, Headset } from "lucide-react";

const SERVICES = [
  {
    icon: Send,
    title: "Application Assistance",
    description: "Seamless digital application process using UPI or ASBA for quick and error-free IPO bidding."
  },
  {
    icon: FileSearch,
    title: "IPO Selection Guidance",
    description: "In-depth research reports and recommendations to help you identify the most promising upcoming issues."
  },
  {
    icon: UserCheck,
    title: "Demat Setup Support",
    description: "End-to-end assistance in opening and activating your Demat and trading accounts required for applying."
  },
  {
    icon: Activity,
    title: "Application Tracking",
    description: "Real-time updates on your application status, allotment probability, and refund processing."
  },
  {
    icon: Headset,
    title: "Investment Consultation",
    description: "Expert advice on whether to hold for the long term or exit on listing day based on market sentiment."
  }
];

export const IPOServices = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-primary">Our IPO Investment Services</h3>
          <p className="text-muted-foreground text-lg">
            We provide comprehensive, end-to-end support to ensure your primary market investments are smooth and strategic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-accent/30 border border-border hover:border-secondary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:bg-secondary group-hover:text-white transition-all">
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
