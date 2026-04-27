"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import WhatsAppIcon from "@/public/icons/whatsapp.png";

export const WhatsAppWidget = () => {
  const phoneNumber = "919227780880";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[9999] flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-colors cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {/* Pulse Effect */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366] -z-10"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <Image
        src={WhatsAppIcon}
        alt="WhatsApp"
        width={64}
        height={64}
        className="w-full h-full object-contain"
      />
    </motion.a>
  );
};
