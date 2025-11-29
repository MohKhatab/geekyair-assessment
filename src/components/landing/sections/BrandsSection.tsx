import Section from "@/components/common/Section";
import Title, { FancyTitle } from "@/components/common/Title";
import BrandCard from "../brands/BrandCard";
import { InfiniteScrollVertical } from "@/components/common/InfiniteScrollVertical";

const brandImages = [
  "landing/brands/brand1.png",
  "landing/brands/brand2.png",
  "landing/brands/brand3.png",
  "landing/brands/brand4.png",
];

export default function BrandsSection() {
  // Generate an array of path pairs to easily split them into columns of 2 images
  const transformedArray: [string, string][] = [];
  brandImages.forEach(
    (_path, i) =>
      i % 2 === 0 &&
      i !== brandImages.length - 1 &&
      transformedArray.push([brandImages[i], brandImages[i + 1]])
  );

  // In case images are odd numbered we give the last image a random image
  (transformedArray.length - 1) % 2 !== 0 &&
    transformedArray.push([
      brandImages[brandImages.length - 1],
      brandImages[Math.floor(Math.random() * (brandImages.length - 1))],
    ]);

  return (
    <Section>
      <Title className="text-center">
        Trusted by thousands
        <br /> of top DTC <FancyTitle>brands.</FancyTitle>
      </Title>
      <div className="flex gap-8 lg:gap-16 justify-center overflow-hidden max-h-32 sm:max-h-48 xl:max-h-64">
        <InfiniteScrollVertical speed={10}>
          {transformedArray.map((pair) => (
            <div
              className="flex flex-col md:flex-row gap-8 lg:gap-16"
              key={pair[0] + pair[1]}
            >
              <BrandCard cardImagePath={pair[0]} />
              <BrandCard cardImagePath={pair[1]} />
            </div>
          ))}
        </InfiniteScrollVertical>

        <InfiniteScrollVertical reverse={true} speed={10}>
          {transformedArray.reverse().map((pair) => (
            <div
              className="flex flex-col md:flex-row gap-8 lg:gap-16"
              key={pair[0] + pair[1]}
            >
              <BrandCard cardImagePath={pair[0]} />
              <BrandCard cardImagePath={pair[1]} />
            </div>
          ))}
        </InfiniteScrollVertical>
      </div>
    </Section>
  );
}
