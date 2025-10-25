"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
  activeSection: string;
}

export function MobileMenu({ navItems, activeSection }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggle = () => setOpen((previous) => !previous);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <div
        className={cn(
          "flex w-full items-center justify-between rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl transition duration-200",
        )}
      >
        <a href="#inicio" className="flex items-center">
          <img
            src="/vtn-image-all-white.svg"
            alt="VTN"
            className="h-10 w-auto"
            loading="lazy"
          />
        </a>

        <HamburgerButton open={open} onToggle={toggle} />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex items-start justify-center bg-black/60 px-4 pt-24"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-black"
              onClick={(event) => event.stopPropagation()}
            >
              <nav className="flex flex-col">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      closeMenu();
                      setTimeout(() => {
                        const target = document.querySelector(item.href) as HTMLElement | null;
                        target?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }, 100);
                    }}
                    className={cn(
                      "flex items-center justify-between gap-4 border-b border-white/10 px-7 py-5 text-left text-base font-medium text-white transition hover:bg-white/5",
                      index === navItems.length - 1 && "border-b-0",
                      activeSection === item.href && "bg-white/5 text-white",
                    )}
                  >
                    <span className="text-lg tracking-wide">{item.name}</span>
                    <svg
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 15L15 5M15 5V13M15 5H7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HamburgerButton({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  const strokeDasharray = open ? "20 300" : "12 63";
  const strokeDashoffset = open ? -32.42 : 0;
  const rotation = open ? -45 : 0;

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-label="Abrir menú"
      className="relative flex h-12 w-12 items-center justify-center rounded-full bg-transparent transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
      >
      <svg
        viewBox="0 0 28 28"
        className="h-9 w-9 text-white transition-transform duration-300"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          fill="none"
          style={{
            transition: "stroke-dasharray 0.3s ease, stroke-dashoffset 0.3s ease",
            strokeDasharray,
            strokeDashoffset,
          }}
        />
        <path
          d="M7 16 27 16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          fill="none"
        />
      </svg>
    </button>
  );
}
