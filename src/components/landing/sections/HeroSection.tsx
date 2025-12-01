import Section from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";

export default function HeroSection() {
  return (
    <Section className="bg-[#E0F8F2] py-0 sm:py-0 lg:py-0 pt-8 lg:pt-16 flex flex-col-reverse lg:flex-row gap-8">
      <div className="w-full my-auto">
        <h1 className="font-bold xl:leading-16 2xl:leading-24 text-4xl sm:text-5xl xl:text-6xl 2xl:text-[82px]">
          Meet your <br />
          <span className="font-grace font-normal text-[#009387]">
            favorite
          </span>{" "}
          new (old) marketing channel.
        </h1>
        <p className="text-base sm:text-xl font-medium mt-4 sm:mt-6 text-[#58595D]">
          Remarkable results. Easier than email. Postcard marketing reinvented
          for modern ecommerce.
        </p>
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-8 xl:pb-0 pb-12">
          <Button size="hero" className="w-full sm:w-auto sm:px-16 uppercase">
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
      <div className="w-full max-w-2xl mx-auto">
        <img
          src="landing/hero.png"
          className="mt-12 h-90 md:h-[480px] object-contain w-full lg:h-auto"
          alt="hero"
        />
      </div>
    </Section>
  );
}
