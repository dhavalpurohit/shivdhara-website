"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

const TEAM_MEMBERS = [
  {
    name: "Nilkant Joshi",
    designation: "Founder & Investment Advisor",
    description:
      "Over 15 years of experience in wealth management and financial advisory.",
    image: "/images/team/dhaval-purohit.jpg",
  },
  {
    name: "Nikhil Rajyaguru",
    designation: "Relationship Manager",
    description:
      "Dedicated to providing exceptional service and building strong client relationships.",
    image: "/images/team/nikhil-shah.jpg",
  },
];

export const Team = () => {
  return (
    <section className="py-24 bg-accent/20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-primary">
            Meet Our Leadership
          </h2>
          <p className="text-muted-foreground text-lg">
            The dedicated professionals behind Shivdhara Securities, committed
            to your financial success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl group border border-border"
            >
              <div className="relative aspect-square overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 animate-pulse" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized // Placeholder
                />
              </div>
              <div className="p-8 space-y-2 text-center">
                <h3 className="text-2xl font-bold text-primary">
                  {member.name}
                </h3>
                <p className="text-secondary font-semibold uppercase tracking-wider text-sm">
                  {member.designation}
                </p>
                <p className="text-muted-foreground pt-4 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
