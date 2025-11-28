import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

export default function Title({ children, className }: IProps) {
  return (
    <h2 className={cn("text-6xl font-bold leading-18 mb-16", className)}>
      {children}
    </h2>
  );
}

export function FancyTitle({ children, className }: IProps) {
  return (
    <span className={cn("font-grace font-normal text-[#009387]", className)}>
      {children}
    </span>
  );
}
