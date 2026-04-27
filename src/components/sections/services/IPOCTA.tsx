"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Send } from "lucide-react";

export const IPOCTA = () => {
  return (
    <section className="py-24 bg-accent/20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-primary p-10 md:p-20 overflow-hidden text-center shadow-2xl"
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl text-white mb-4 border border-white/20">
              <Send className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Apply for Upcoming IPOs Today
            </h2>
            <p className="text-xl text-blue-100/80">
              Get expert support, insightful research, and a seamless application process to increase your chances of successful IPO investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 font-bold rounded-xl hover:bg-white/20 transition-all"
              >
                Speak to an Advisor
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
