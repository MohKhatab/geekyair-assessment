import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type Benefit = {
  title: ReactNode;
  description: string;
  quote: string;
  quoter: string;
  logoPath: string;
};

interface IProps {
  benefit: Benefit;
  className?: string;
}

export default function Benefit({ benefit, className }: IProps) {
  return (
    <div className={cn("flex flex-col gap-10", className)}>
      {benefit.title}
      <p className="text-xl text-[#58595D]">{benefit.description}</p>
      <div className="p-8 border-2 border-[#D1C7BE] rounded-xl relative">
        <div className="absolute bottom-full -top-3 bg-[#FDF3EA] px-2">
          <svg
            width="29"
            height="23"
            viewBox="0 0 29 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.48128 11.7531C8.80774 11.7531 9.84239 12.2848 10.5852 13.3481C11.3811 14.3555 11.779 15.6148 11.779 17.1259C11.779 18.749 11.2484 20.0922 10.1873 21.1555C9.1261 22.1629 7.79963 22.6667 6.20786 22.6667C4.40386 22.6667 2.91823 21.9671 1.75093 20.5679C0.583638 19.1688 0 17.3498 0 15.1112C0 11.9769 0.95506 9.12263 2.86517 6.54814C4.77529 3.97366 7.61392 1.79095 11.3811 0V2.09876C9.15262 3.16214 7.24251 4.56131 5.65074 6.29629C4.05899 7.97531 3.26311 9.6543 3.26311 11.3333C3.26311 12.4526 3.55493 13.0124 4.13858 13.0124C4.24469 13.0124 4.37734 12.9843 4.53652 12.9284C4.6957 12.8164 4.85487 12.7326 5.01405 12.6765C5.80992 12.0609 6.63234 11.7531 7.48128 11.7531ZM24.0356 11.7531C25.362 11.7531 26.3968 12.2848 27.1395 13.3481C27.9354 14.3555 28.3333 15.6148 28.3333 17.1259C28.3333 18.749 27.8028 20.0922 26.7416 21.1555C25.6803 22.1629 24.3539 22.6667 22.7622 22.6667C20.9582 22.6667 19.4725 21.9671 18.3052 20.5679C17.138 19.1688 16.5543 17.3498 16.5543 15.1112C16.5543 11.9769 17.5094 9.12263 19.4195 6.54814C21.3296 3.97366 24.1682 1.79095 27.9354 0V2.09876C25.707 3.16214 23.7969 4.56131 22.2051 6.29629C20.6134 7.97531 19.8175 9.6543 19.8175 11.3333C19.8175 12.4526 20.1093 13.0124 20.6928 13.0124C20.7989 13.0124 20.9317 12.9843 21.0908 12.9284C21.25 12.8164 21.4092 12.7326 21.5683 12.6765C22.3642 12.0609 23.1866 11.7531 24.0356 11.7531Z"
              fill="#FF6D2C"
            />
          </svg>
        </div>

        <p className="font-medium italic text-[#58595D]">{benefit.quote}</p>

        <div className="mt-4 flex justify-between">
          <p className="text-[#A89B90]">{benefit.quoter}</p>

          <img src={benefit.logoPath} />
        </div>
      </div>
    </div>
  );
}
