"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        {NAV_LINKS.map((link) => (
          <div key={link.name} className="relative group">
            <Link
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary flex items-center gap-1",
                pathname === link.href ? "text-secondary" : "text-primary"
              )}
            >
              {link.name}
              {link.subLinks && <ChevronDown className="w-4 h-4" />}
            </Link>

            {link.subLinks && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {link.subLinks.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-2 text-sm text-primary hover:bg-accent hover:text-secondary transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        <Button size="sm">Open Account</Button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-primary hover:text-secondary transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full right-0 mt-4 w-64 bg-white border border-border rounded-lg shadow-xl p-4 z-50 lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block text-base font-medium",
                      pathname === link.href ? "text-secondary" : "text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-accent pl-4">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-muted-foreground hover:text-secondary"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button className="w-full">Open Account</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
