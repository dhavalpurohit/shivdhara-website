"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export const AboutHero = () => {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-accent/30 to-secondary/5 pt-20">
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tight">
            About <span className="text-secondary">Shivdhara</span> Securities
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your trusted partner in financial growth and wealth management since 2010.
          </p>
        </motion.div>
      </Container>
      
      {/* Abstract Background elements */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 transform translate-x-20" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/5 rounded-full blur-3xl" 
      />
    </section>
  );
};
