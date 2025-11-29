import { motion } from "framer-motion";

export function InfiniteScrollVertical({
  children,
  speed = 30,
  reverse = false,
}: {
  children: React.ReactNode;
  speed?: number;
  reverse?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ y: reverse ? "-100%" : 0 }}
        animate={{ y: reverse ? 0 : "-100%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="flex flex-col md:gap-16 shrink-0 gap-8 pb-8 md:pb-16"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ y: reverse ? "-100%" : 0 }}
        animate={{ y: reverse ? 0 : "-100%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="flex flex-col md:gap-16 shrink-0 gap-8 pb-8 md:pb-16"
      >
        {children}
      </motion.div>
    </div>
  );
}
