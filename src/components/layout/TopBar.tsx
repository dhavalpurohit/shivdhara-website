"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import {
  Phone,
  Mail,
  MessageCircle as Facebook,
  Camera as Instagram,
  Globe as Linkedin,
  PlayCircle as Youtube,
} from "lucide-react";
import Link from "next/link";

export const TopBar = () => {
  return (
    <div className="h-10 bg-primary text-white flex items-center border-b border-white/10 overflow-hidden">
      <Container className="flex justify-between items-center text-[13px] font-medium gap-2.5 w-full">
        {/* Left Side: Contact Info */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+919227780880"
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Phone size={14} className="text-secondary" />
            <span>+91 92277 80880</span>
          </a>
          <a
            href="mailto:info@shivdharasecurities.com"
            className="hidden sm:flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Mail size={14} className="text-secondary" />
            <span>info@shivdharasecurities.com</span>
          </a>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="hover:text-secondary transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={16} />
          </Link>
          <Link
            href="#"
            className="hover:text-secondary transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </Link>
          <Link
            href="#"
            className="hover:text-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </Link>
          <Link
            href="#"
            className="hover:text-secondary transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={16} />
          </Link>
        </div>
      </Container>
    </div>
  );
};
