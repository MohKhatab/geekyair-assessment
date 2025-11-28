import Section from "@/components/common/Section";
import Title, { FancyTitle } from "@/components/common/Title";

type Trend = {
  bannerUrl: string;
  title: string;
};

const trends: Trend[] = [
  {
    bannerUrl: "landing/trends/1.png",
    title: "3 Low-Cost Campaigns You Must Run to Win BFCM",
  },
  {
    bannerUrl: "landing/trends/2.png",
    title: "Postcard Marketing: The Definitive Guide to High ROI [2022]",
  },
  {
    bannerUrl: "landing/trends/3.png",
    title: "The Ultimate Guide to Thank You Notes for Ecommerce",
  },
];

export default function LatestSection() {
  return (
    <Section className="bg-[#F3FAFA]">
      <Title className="text-center">
        Latest trends & <FancyTitle>insights</FancyTitle>
      </Title>

      <div className="flex gap-8 justify-center">
        {trends.map((trend) => (
          <TrendCard key={trend.title} trend={trend} />
        ))}
      </div>
    </Section>
  );
}

function TrendCard({ trend }: { trend: Trend }) {
  return (
    <div className="max-w-lg">
      <img
        src={trend.bannerUrl}
        className="aspect-video w-full object-cover rounded-xl"
      />
      <p className="mt-5 text-2xl font-bold">{trend.title}</p>
    </div>
  );
}
