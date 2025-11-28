import Section from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";

export default function CTASection() {
  return (
    <Section className="grid grid-cols-2 bg-[#FF6D2C] py-0">
      <div className="flex flex-col justify-center">
        <h2 className="text-white font-bold text-[81px] leading-24">
          Try PostPilot
          <br /> Risk-Free
        </h2>
        <p className="font-medium text-xl text-white mt-4">
          No contracts. No commitments. Guaranteed results.*
        </p>

        <div className="mt-12 flex items-center gap-8">
          <Button size="hero" className="px-16 uppercase" variant="secondary">
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

        <p className="text-sm font-medium text-white/70 mt-8">
          * for qualified brands with over $1m annual Shopify revenue.
        </p>
      </div>
      <img src="landing/cta.png" />
    </Section>
  );
}
