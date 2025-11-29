import Section from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";

export default function CTASection() {
  return (
    <Section className="grid grid-cols-1 lg:grid-cols-2 bg-[#FF6D2C] py-0 sm:py-0 lg:py-0 relative px-0 sm:px-0 lg:px-0">
      <div className="flex flex-col justify-center z-10 bg-linear-to-r from-[#FF6D2C] to-[#FF6D2C]/50 py-12 px-5 sm:px-10 lg:px-20">
        <h2 className="text-white font-bold text-5xl xl:text-[81px] xl:leading-24">
          Try PostPilot
          <br /> Risk-Free
        </h2>
        <p className="font-medium text-base xl:text-xl text-white mt-4">
          No contracts. No commitments. Guaranteed results.*
        </p>

        <div className="mt-6 xl:mt-12 flex flex-col sm:flex-row items-center gap-8">
          <Button
            size="hero"
            className="px-16 uppercase w-full sm:w-fit"
            variant="secondary"
          >
            Try it Risk-free
          </Button>
          <div>
            <div className="text-white flex text-xl gap-1 justify-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-base mt-1 font-medium text-white">
              5.0 Shoppify Rating
            </p>
          </div>
        </div>

        <p className="text-sm font-medium text-white/70 mt-4 xl:mt-8">
          * for qualified brands with over $1m annual Shopify revenue.
        </p>
      </div>
      <img
        src="landing/cta.png"
        className="absolute lg:static h-full right-5 sm:right-10 lg:right-20"
      />
    </Section>
  );
}
