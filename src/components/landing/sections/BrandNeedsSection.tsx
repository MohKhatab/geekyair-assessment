import Section from "@/components/common/Section";
import Title, { FancyTitle } from "@/components/common/Title";
import type { BrandNeedType } from "../brandNeeds/BrandNeedCard";
import BrandNeedCard from "../brandNeeds/BrandNeedCard";

const brandNeeds: BrandNeedType[] = [
  {
    color: "#FDF3EA",
    title: "Plug-and-play with your stack",
    description:
      "Native integrations provide seamless segmentation, automation & tracking. No clunky spreadsheets.",
    imagePath: "landing/brandNeeds/need1.png",
  },
  {
    color: "#E0F8F2",
    title: "Run campaigns on autopilot",
    description: "Ink profits while you sleep: Just set it and forget it.",
    imagePath: "landing/brandNeeds/need2.png",
  },
  {
    color: "#EEECFF",
    title: "Real-time ROI dashboard",
    description:
      "Track performance of every postcard by customer or discount code. Your CFO will love it.",
    imagePath: "landing/brandNeeds/need3.png",
  },
  {
    color: "#FAEDED",
    title: "Deliver WOW with *real* handwritten cards",
    description:
      "Our proprietary robots use real pens and ink for an unforgettable VIP touch.",
    imagePath: "landing/brandNeeds/need4.png",
  },
  {
    color: "#D9F2F7",
    title: "Predictable pricing",
    description:
      "Unlike CPCs, postage rates don’t change based on competition or who you’re targeting.",
    imagePath: "landing/brandNeeds/need5.png",
  },
  {
    color: "#F1F1F1",
    title: "Complimentary concierge service",
    description:
      "DTC is in our DNA. Our pros will build your strategy and custom designs using battle-tested best practices.",
    imagePath: "landing/brandNeeds/need6.png",
  },
];

export default function BrandNeedsSection() {
  return (
    <Section>
      <Title className="text-center">
        Everything your brand needs to
        <br />
        <FancyTitle>make your brand unforgettable</FancyTitle>
      </Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {brandNeeds.map((brandNeed) => (
          <BrandNeedCard key={brandNeed.title} brandNeed={brandNeed} />
        ))}
      </div>
    </Section>
  );
}
