"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rajesh Mehta",
    text: "Excellent advisory services and professional support. Shivdhara Securities helped me build a diversified portfolio that aligns perfectly with my long-term goals.",
    rating: 5,
    role: "Business Owner",
  },
  {
    name: "Dhaval Purohit",
    text: "I was new to investing, but their team made everything so simple to understand. Their transparency and patience are truly commendable.",
    rating: 5,
    role: "IT Professional",
  },
  {
    name: "Amit Patel",
    text: "The personalized attention I receive for my wealth management is exceptional. I highly recommend them to anyone seeking reliable financial guidance.",
    rating: 5,
    role: "Retired Professor",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-primary">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Trust is the foundation of our business. Hear from some of our
            valued clients about their journey with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-accent/30 border border-border relative flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-secondary/10" />
              <div className="space-y-4">
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-primary/80 italic leading-relaxed relative z-10">
                  "{item.text}"
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
