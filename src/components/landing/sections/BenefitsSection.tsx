import Section from "@/components/common/Section";
import Title, { FancyTitle } from "@/components/common/Title";
import BenefitCard, { type Benefit } from "../benefits/BenefitCard";
import { Button } from "@/components/ui/button";

const benefits: Benefit[] = [
  {
    title: (
      <Title className="mb-0 text-6xl">
        <FancyTitle>Powerful</FancyTitle>
        <br /> acquisition & retention
      </Title>
    ),
    description:
      "Send one-off or triggered campaigns to customers & prospects. Target email leads with MailMatch™.",
    quote:
      "It`s like Klaviyo for direct mail. The results are absolutely insane.",
    quoter: "Ash Melwani, CMO",
    logoPath: "",
  },
  {
    title: (
      <Title className="mb-0 text-6xl">
        <FancyTitle>Fight back</FancyTitle> against iOS
        <br /> updates, jacked-up CPCs & spam folders
      </Title>
    ),
    description:
      "Deliver your message to all of your customers — for less than the cost of a click.",
    quote:
      "PostPilot is our new weapon against sinking email engagement and rising PPC costs. The results and ROI have been outstanding. It’s now one of our core marketing channels to increase acquisition & LTV.",
    quoter: "Leah Keith, GM",
    logoPath: "",
  },
  {
    title: (
      <Title className="mb-0 text-6xl">
        Done for <FancyTitle>you</FancyTitle>
      </Title>
    ),
    description:
      "From design & strategy to stamp-licking, our ecom experts help you every step of the way.",
    quote:
      "The team is so knowledgeable and beyond helpful. I’m blown away by their communication, detail, and attentiveness and always feel like they have our best interest in mind. Definitely worth a try.",
    quoter: "Holly Davies, Marketing Director",
    logoPath: "",
  },
];

export default function BenefitsSection() {
  return (
    <Section className="bg-[#FDF3EA]">
      <Title className="text-center max-w-3xl mx-auto">
        PostPilot makes it a <FancyTitle>cinch</FancyTitle> to send
        personalized, profit-generating postcards.
      </Title>

      <div className="grid grid-cols-2 gap-8 gap-y-32">
        {benefits.map((benefit, i) => (
          <BenefitCard
            className={`row-start-${i + 1} col-start-${(i % 2) + 1}`}
            benefit={benefit}
          />
        ))}
      </div>

      <Button className="uppercase mt-12" size="hero">
        TRY IT RISK-FREE
      </Button>
    </Section>
  );
}
