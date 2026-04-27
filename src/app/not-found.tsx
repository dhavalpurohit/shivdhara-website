"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Home, ArrowLeft, Search, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center pt-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <div className="text-[150px] md:text-[200px] font-black text-primary/5 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <FileQuestion size={100} className="text-secondary animate-bounce-slow" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Oops! Page Not Found
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              <Home size={20} />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary border-2 border-primary/10 font-bold rounded-xl hover:bg-accent transition-all"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-12"
          >
            <p className="text-sm font-semibold text-primary/40 uppercase tracking-widest mb-6">
              Useful Links
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <Link href="/about" className="text-primary/60 hover:text-secondary font-medium transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-primary/60 hover:text-secondary font-medium transition-colors">
                Our Services
              </Link>
              <Link href="/faq" className="text-primary/60 hover:text-secondary font-medium transition-colors">
                FAQs
              </Link>
              <Link href="/contact" className="text-primary/60 hover:text-secondary font-medium transition-colors">
                Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -z-10 animate-pulse" />
    </main>
  );
}
