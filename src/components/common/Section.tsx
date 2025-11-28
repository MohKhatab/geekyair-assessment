import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export default function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn(`py-24 px-20`, className)}>{children}</div>;
}
