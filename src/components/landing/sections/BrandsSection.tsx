import Section from "@/components/common/Section";
import Title, { FancyTitle } from "@/components/common/Title";
import BrandCard from "../brands/BrandCard";

const brandImages = [
  "landing/brands/brand1.png",
  "landing/brands/brand2.png",
  "landing/brands/brand3.png",
  "landing/brands/brand4.png",
];

export default function BrandsSection() {
  return (
    <Section>
      <Title className="text-center">
        Trusted by thousands
        <br /> of top DTC <FancyTitle>brands.</FancyTitle>
      </Title>
      <div className="flex gap-16 justify-center">
        {brandImages.map((path) => (
          <BrandCard cardImagePath={path} />
        ))}
      </div>
    </Section>
  );
}
