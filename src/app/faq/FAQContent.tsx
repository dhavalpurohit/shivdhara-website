"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion } from "@/components/ui/Accordion";
import { cn } from "@/lib/utils";

interface FAQContentProps {
  data: Array<{
    category: string;
    questions: Array<{ question: string; answer: string }>;
  }>;
}

export const FAQContent = ({ data }: FAQContentProps) => {
  const [activeCategory, setActiveCategory] = useState(data[0].category);

  const activeQuestions = data.find((cat) => cat.category === activeCategory)?.questions || [];

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="flex overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
        <div className="flex gap-3 md:flex-wrap md:justify-center md:w-full">
          {data.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={cn(
                "whitespace-nowrap px-6 py-3 rounded-full text-sm font-bold transition-all border-2",
                activeCategory === cat.category
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                  : "bg-white border-primary/10 text-primary hover:border-primary/30"
              )}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">
              {activeCategory}
            </h2>
            <div className="h-1 w-12 bg-secondary rounded-full" />
          </div>
          <Accordion items={activeQuestions} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
