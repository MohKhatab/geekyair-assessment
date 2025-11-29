import { useMediaQuery } from "usehooks-ts";

export function useTailwindBreakpoints() {
  const isSm = useMediaQuery("(min-width: 640px)");
  const isMd = useMediaQuery("(min-width: 768px)");
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isXl = useMediaQuery("(min-width: 1280px)");
  const is2xl = useMediaQuery("(min-width: 1536px)");

  return { isSm, isMd, isLg, isXl, is2xl };
}
