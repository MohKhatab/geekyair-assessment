import Section from "@/components/common/Section";
import Title, { FancyTitle } from "@/components/common/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
import "../../../assets/pagination.css";

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

      <div className="hidden lg:flex gap-8 justify-center mt-8">
        {trends.map((trend) => (
          <TrendCard key={trend.title} trend={trend} />
        ))}
      </div>

      <div className="lg:hidden mt-8">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          loop
          pagination={{ el: ".my-pagination", clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="px-6"
        >
          {trends.map((trend) => (
            <SwiperSlide key={trend.title}>
              <TrendCard trend={trend} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="my-pagination static flex gap-2 justify-center mt-4"></div>
      </div>
    </Section>
  );
}

function TrendCard({ trend }: { trend: Trend }) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <img
        src={trend.bannerUrl}
        className="aspect-video w-full object-cover rounded-xl"
      />
      <p className="mt-5 text-xl xl:text-2xl font-bold">{trend.title}</p>
    </div>
  );
}
