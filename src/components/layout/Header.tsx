"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Navbar } from "./Navbar";
import { TopBar } from "./TopBar";
import { cn } from "@/lib/utils";

import Image from "next/image";
import LogoImage from "@/public/logo/logo-horizontal.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent",
      )}
    >
      <TopBar />
      <div
        className={cn(
          "transition-all duration-300",
          isScrolled ? "py-2" : "py-4",
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src={LogoImage}
                alt="Shivdhara Securities"
                width={220}
                height={55}
                className={cn(
                  "w-auto transition-all duration-300",
                  isScrolled ? "h-10" : "h-12",
                )}
                priority
              />
            </Link>

            <Navbar />
          </div>
        </Container>
      </div>
    </header>
  );
};
