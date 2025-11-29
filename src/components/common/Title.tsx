import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

export default function Title({ children, className }: IProps) {
  return (
    <h2
      className={cn(
        "text-4xl sm:text-5xl lg:text-6xl font-bold sm:leading-12 lg:leading-14 xl:leading-18 mb-10 md:mb-16",
        className
      )}
    >
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
