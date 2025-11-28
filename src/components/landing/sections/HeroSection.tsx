import Section from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";

export default function HeroSection() {
  return (
    <Section className="bg-[#E0F8F2] py-0 flex gap-8">
      <div className="w-full my-auto">
        <h1 className="font-bold leading-24 text-[82px]">
          Meet your <br />
          <span className="font-grace font-normal text-[#009387]">
            favorite
          </span>{" "}
          new (old) marketing channel.
        </h1>
        <p className="text-xl font-medium mt-6 text-[#58595D]">
          Remarkable results. Easier than email. Postcard marketing reinvented
          for modern ecommerce.
        </p>
        <div className="mt-12 flex items-center gap-8">
          <Button size="hero" className="px-16 uppercase">
            Try it Risk-free
          </Button>
          <div>
            <div className="text-yellow-400 flex text-xl gap-1 justify-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-base mt-1 font-medium text-[#2E2F35]">
              5.0 Shoppify Rating
            </p>
          </div>
        </div>
      </div>
      <img src="landing/hero.png" className="mt-12" alt="hero" />
    </Section>
  );
}
