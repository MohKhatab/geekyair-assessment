import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface IProps {
  title: string;
  description: string;
  index: number;
  intervalDuration: number;
  isActive: boolean;
}

import { motion } from "framer-motion";

export default function FastLaunchItem({
  title,
  description,
  index,
  intervalDuration,
  isActive,
}: IProps) {
  return (
    <AccordionItem value={`${index}`}>
      <AccordionTrigger
        className={`font-bold text-2xl md:text-3xl flex gap-4 md:gap-10 items-center ${
          isActive ? "opacity-100" : "opacity-50"
        } transition-opacity`}
      >
        <p className="font-grace text-4xl md:text-5xl text-center font-normal w-8 text-[#009387]">
          {String(index + 1).padStart(2, "0")}
        </p>
        <p>{title}</p>
      </AccordionTrigger>
      <AccordionContent className="flex gap-10 text-balance my-2">
        <div className="w-8">
          <div className="mx-auto h-full w-0.5 bg-[#A0CDCD] relative rounded-full">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{
                duration: intervalDuration / 1000,
                ease: "linear",
              }}
              className="w-1 absolute left-1/2 -translate-x-1/2 rounded-full bg-[#2E2F35]"
            />
          </div>
        </div>
        <p className="max-w-md">{description}</p>
      </AccordionContent>
    </AccordionItem>
  );
}
