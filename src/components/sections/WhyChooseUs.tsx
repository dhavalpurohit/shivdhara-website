"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Shield, Zap, Headphones, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Research",
      description: "Our in-house research team provides daily market insights and long-term investment ideas.",
      icon: BarChart3,
    },
    {
      title: "Secure & Reliable",
      description: "State-of-the-art security protocols to ensure your data and investments are always safe.",
      icon: Shield,
    },
    {
      title: "Lightning Fast",
      description: "Experience high-speed execution with our advanced trading platforms across all devices.",
      icon: Zap,
    },
    {
      title: "24/7 Support",
      description: "Dedicated relationship managers and support team to assist you whenever you need.",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          title="Why Choose Shivdhara?"
          subtitle="We combine technology with human expertise to deliver an unparalleled financial experience."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
