import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FOOTER_LINKS } from "@/constants/navigation";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle as Facebook, // Placeholder for Facebook
  X as Twitter, // Replacement for Twitter
  Globe as Linkedin, // Placeholder for Linkedin
  Camera as Instagram, // Placeholder for Instagram
} from "lucide-react";

import Image from "next/image";
import LogoImage from "@/public/logo/footer-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={LogoImage}
                alt="Shivdhara Securities"
                width={200}
                height={200}
                className="w-auto" // Make it white for dark background if needed, or remove if transparent white logo
              />
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed">
              Your trusted partner in financial growth and security. Providing
              expert advisory and trading solutions since 2010.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-100 text-sm hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-100 text-sm hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-blue-100 text-sm">
                  1412, RK Empire, 150 Feet Ring Rd, Near Mavdi circle, Rajkot,
                  Gujarat, India, 360004
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:+919227780880" className="text-blue-100 text-sm">
                  +91 9227780880
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a
                  href="mailto:[EMAIL_ADDRESS]"
                  className="text-blue-100 text-sm"
                >
                  [EMAIL_ADDRESS]
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-blue-900 text-center">
          <p className="text-blue-200 text-xs mb-4">
            Disclaimer: Investment in securities market are subject to market
            risks. Read all the related documents carefully before investing.
          </p>
          <p className="text-blue-300 text-xs">
            © {new Date().getFullYear()} Shivdhara Securities. All Rights
            Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
