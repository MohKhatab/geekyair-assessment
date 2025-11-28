import BenefitsSection from "@/components/landing/sections/BenefitsSection";
import BrandNeedsSection from "@/components/landing/sections/BrandNeedsSection";
import BrandsSection from "@/components/landing/sections/BrandsSection";
import FastLaunchSection from "@/components/landing/sections/FastLaunchSection";
import HeroSection from "@/components/landing/sections/HeroSection";
import ReviewsSection from "@/components/landing/sections/ReviewsSection";
import StatsSection from "@/components/landing/sections/StatsSection";

export default function Landing() {
  return (
    <div>
      <HeroSection />
      <BrandsSection />
      <StatsSection />
      <BenefitsSection />
      <BrandNeedsSection />
      <FastLaunchSection />
      <ReviewsSection />
    </div>
  );
}
