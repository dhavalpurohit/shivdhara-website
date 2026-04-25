"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ChevronRight, TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-accent/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#002147_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>Leading Stock Broker in India</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-[1.1]">
              Secure Your Future With <span className="text-secondary">Smart</span> Investing
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Experience premier financial services with personalized advisory, cutting-edge trading tools, and a commitment to your wealth growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Get Started <ChevronRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Services
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-12">
              <div>
                <p className="text-3xl font-bold text-primary">15k+</p>
                <p className="text-sm text-muted-foreground">Active Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">₹500Cr+</p>
                <p className="text-sm text-muted-foreground">Assets Managed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">12+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              {/* Replace with actual image later */}
              <div className="bg-primary aspect-[4/5] flex items-center justify-center p-12">
                <div className="text-center">
                   <div className="w-32 h-32 bg-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                      <TrendingUp className="w-16 h-16 text-primary" />
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-4">Investment Excellence</h3>
                   <p className="text-blue-200">Handcrafted strategies for your unique financial goals.</p>
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white p-6 rounded-xl shadow-xl z-20 border border-border"
            >
              <p className="text-sm font-semibold text-muted-foreground">Monthly Returns</p>
              <p className="text-2xl font-bold text-green-600">+12.4%</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
