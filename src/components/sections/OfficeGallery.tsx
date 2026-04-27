"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

import OfficeImage1 from "@/public/images/aboutus/office-image-1.png";
import OfficeImage2 from "@/public/images/aboutus/office-image-2.png";

const GALLERY_IMAGES = [
  {
    title: "Office Desk",
    src: OfficeImage1,
  },
  {
    title: "Office Desk",
    src: OfficeImage2,
  },
];

export const OfficeGallery = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-primary">Our Workspace</h2>
          <p className="text-muted-foreground text-lg">
            A professional environment designed for collaboration and focused
            financial planning.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
            >
              <div className="absolute inset-0 bg-primary/20 animate-pulse" />
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized // Placeholder
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold text-lg">
                  {image.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
