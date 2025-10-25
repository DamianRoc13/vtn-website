"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  href: string;
  children: ReactNode;
  active?: boolean;
  className?: string;
  onClick?: () => void;
}

export function NavbarItem({
  href,
  children,
  active,
  className,
  onClick,
}: Props) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white/70 transition duration-200 hover:bg-white/10 hover:text-white",
        active && "bg-white/10 text-white",
        className,
      )}
    >
      {children}
    </a>
  );
}
