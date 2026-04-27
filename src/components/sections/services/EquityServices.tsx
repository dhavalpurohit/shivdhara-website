"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Zap, Briefcase, FileSearch, LineChart, Users, Milestone } from "lucide-react";

const SERVICES = [
  {
    icon: Milestone,
    title: "Equity Delivery Trading",
    description: "Buy shares and hold them in your Demat account for long-term growth and dividends."
  },
  {
    icon: Zap,
    title: "Intraday Trading Support",
    description: "Capitalize on market volatility with expert guidance and real-time execution for same-day trades."
  },
  {
    icon: Briefcase,
    title: "IPO Investment Assistance",
    description: "Seamlessly participate in the primary market with our assisted IPO application process."
  },
  {
    icon: LineChart,
    title: "Portfolio Diversification",
    description: "Balance your risk by spreading investments across multiple sectors and market capitalizations."
  },
  {
    icon: FileSearch,
    title: "Market Research Insights",
    description: "Access in-depth technical and fundamental analysis to make data-driven investment choices."
  },
  {
    icon: Users,
    title: "Investment Advisory",
    description: "Get personalized support from experienced advisors to build a portfolio that matches your goals."
  }
];

export const EquityServices = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Our Offerings</h2>
          <h3 className="text-4xl font-bold text-primary">Comprehensive Equity Solutions</h3>
          <p className="text-muted-foreground text-lg">
            We provide a complete ecosystem for stock market participants, from long-term investors to active traders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
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
