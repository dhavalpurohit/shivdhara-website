"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { SERVICES } from "@/constants/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          title="Our Premium Services"
          subtitle="We offer a comprehensive suite of financial solutions designed to help you build, manage, and protect your wealth."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group">
                <CardHeader>
                  <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4 transition-colors group-hover:bg-primary">
                    <service.icon className="w-8 h-8 text-primary transition-colors group-hover:text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
