import Section from "@/components/common/Section";
import Title, { FancyTitle } from "@/components/common/Title";
import BenefitCard, { type Benefit } from "../benefits/BenefitCard";
import { Button } from "@/components/ui/button";

const benefits: Benefit[] = [
  {
    title: (
      <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold">
        <FancyTitle className="text-4xl sm:text-5xl xl:text-6xl">
          Powerful
        </FancyTitle>
        <br /> acquisition & retention
      </h2>
    ),
    description:
      "Send one-off or triggered campaigns to customers & prospects. Target email leads with MailMatch™.",
    quote:
      "It`s like Klaviyo for direct mail. The results are absolutely insane.",
    quoter: "Ash Melwani, CMO",
    logoPath: "landing/benefitLogos/1.png",
  },
  {
    title: (
      <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold">
        <FancyTitle className="text-4xl sm:text-5xl xl:text-6xl">
          Fight back
        </FancyTitle>{" "}
        against iOS
        <br /> updates, jacked-up CPCs & spam folders
      </h2>
    ),
    description:
      "Deliver your message to all of your customers — for less than the cost of a click.",
    quote:
      "PostPilot is our new weapon against sinking email engagement and rising PPC costs. The results and ROI have been outstanding. It’s now one of our core marketing channels to increase acquisition & LTV.",
    quoter: "Leah Keith, GM",
    logoPath: "landing/benefitLogos/2.png",
  },
  {
    title: (
      <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold">
        Done for{" "}
        <FancyTitle className="text-4xl sm:text-5xl xl:text-6xl">
          you
        </FancyTitle>
      </h2>
    ),
    description:
      "From design & strategy to stamp-licking, our ecom experts help you every step of the way.",
    quote:
      "The team is so knowledgeable and beyond helpful. I’m blown away by their communication, detail, and attentiveness and always feel like they have our best interest in mind. Definitely worth a try.",
    quoter: "Holly Davies, Marketing Director",
    logoPath: "landing/benefitLogos/3.png",
  },
];

export default function BenefitsSection() {
  return (
    <Section className="bg-[#FDF3EA]">
      <Title className="text-center max-w-3xl mx-auto">
        PostPilot makes it a <FancyTitle>cinch</FancyTitle> to send
        personalized, profit-generating postcards.
      </Title>

      <div className="w-full h-full flex flex-col gap-16 xl:gap-32 mt-12">
        {benefits.map((benefit, i) => (
          <BenefitCard
            key={benefit.quote}
            className={`lg:w-1/2 ${i % 2 !== 0 && "ml-auto"}`}
            benefit={benefit}
          />
        ))}
      </div>

      <Button className="uppercase mt-12 sm:w-fit w-full" size="hero">
        TRY IT RISK-FREE
      </Button>
    </Section>
  );
}
