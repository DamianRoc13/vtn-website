"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Contacto", href: "#contacto" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState<string>(navItems[0].href);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matchedItem = navItems.find(
              (item) => item.href === `#${entry.target.id}`,
            );
            if (matchedItem) {
              setActiveSection(matchedItem.href);
            }
          }
        });
      },
      { threshold: 0.2 },
    );

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const nav = useMemo(
    () => (
      <Navigation
        navItems={navItems}
        activeSection={activeSection}
      />
    ),
    [activeSection],
  );

  return (
    <motion.nav className="fixed inset-x-0 top-4 z-50 mx-auto flex w-full max-w-7xl justify-center px-4 lg:px-0">
      <div className="hidden w-full lg:block">{nav}</div>
      <div className="flex h-full w-full items-center justify-between lg:hidden">
        <MobileMenu
          navItems={navItems}
          activeSection={activeSection}
        />
      </div>
    </motion.nav>
  );
}
