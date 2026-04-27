"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eye } from "lucide-react";

export const Vision = () => {
  return (
    <section className="py-20 bg-accent/20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg text-secondary mb-4">
            <Eye className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold text-primary">Our Vision</h2>
          <p className="text-2xl font-medium text-primary/80 leading-relaxed italic">
            "To become a trusted financial partner known for delivering consistent investment growth and exceptional client service."
          </p>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full" />
        </motion.div>
      </Container>
    </section>
  );
};
