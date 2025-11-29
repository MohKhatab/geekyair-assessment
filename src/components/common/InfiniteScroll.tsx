import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export function InfiniteScroll({
  children,
  speed = 30,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    });
  }, []);

  return (
    <div className="flex">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="flex gap-8 shrink-0 pr-8"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="flex gap-8 shrink-0 pr-8"
      >
        {children}
      </motion.div>
    </div>
  );
}
