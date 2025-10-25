"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavbarItem } from "./NavbarItem";

interface NavItem {
  name: string;
  href: string;
}

interface NavigationProps {
  navItems: NavItem[];
  activeSection: string;
}

export function Navigation({ navItems, activeSection }: NavigationProps) {
  const { scrollY } = useScroll();
  const [showBackground, setShowBackground] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setShowBackground(value > 100);
  });

  return (
    <motion.div
      className={cn(
        "relative mx-auto flex w-full max-w-6xl items-center gap-6 px-6 py-3 transition-all duration-300",
        showBackground
          ? "rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl"
          : "rounded-full border border-transparent",
      )}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-1 items-center">
        <a href="#inicio" className="flex items-center">
          <img
            src="/vtn-image-all-white.svg"
            alt="VTN"
            className="h-8 w-auto"
            loading="lazy"
          />
        </a>
      </div>

      <nav className="hidden flex-none items-center justify-center gap-2 md:flex">
        {navItems.map((item) => (
          <NavbarItem
            href={item.href}
            key={item.name}
            active={activeSection === item.href}
          >
            {item.name}
          </NavbarItem>
        ))}
      </nav>

      <div className="flex flex-1 justify-end" />
    </motion.div>
  );
}
