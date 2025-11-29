import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export default function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `py-12 sm:py-18 lg:py-24 px-5 sm:px-10 lg:px-20`,
        className
      )}
    >
      {children}
    </div>
  );
}
