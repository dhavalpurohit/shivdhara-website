"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export const MutualIntro = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">
                Understanding Funds
              </h2>
              <h3 className="text-4xl font-bold text-primary">
                What Are Mutual Funds?
              </h3>
            </div>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Mutual funds are sophisticated investment vehicles that pool capital from numerous investors to create a large corpus. This collective fund is then invested in a diversified portfolio of stocks, bonds, or other securities, managed by professional fund managers.
              </p>
              <p>
                The primary advantage of mutual funds is that they provide individual investors with access to professionally managed, diversified portfolios that would be difficult to create on their own. Whether you are looking for aggressive growth or stable income, there is a mutual fund scheme designed for your specific objective.
              </p>
              <p>
                At Shivdhara Securities, we help you navigate the vast landscape of mutual funds to find the right balance between risk and reward, ensuring your money works as hard as you do.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-accent/20 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white">
              <div className="absolute inset-0 bg-primary/5 animate-pulse" />
              <Image
                src="/images/services/mutual-funds-intro.jpg"
                alt="Mutual Fund Investment Concept"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
