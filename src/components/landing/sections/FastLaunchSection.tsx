import Section from "@/components/common/Section";
import Title, { FancyTitle } from "@/components/common/Title";
import FastLaunchItem from "../fastLaunch/FastLaunchItem";
import { Accordion } from "@/components/ui/accordion";
import { useEffect, useState } from "react";

const accordionItems: { title: string; description: string }[] = [
  {
    title: "Segment",
    description:
      "One-off announcements or automatically triggered flows. Customers receive their personalized cards within a week.",
  },
  {
    title: "Design",
    description:
      "One-off announcements or automatically triggered flows. Customers receive their personalized cards within a week.",
  },
  {
    title: "Send",
    description:
      "One-off announcements or automatically triggered flows. Customers receive their personalized cards within a week.",
  },
  {
    title: "Convert",
    description:
      "One-off announcements or automatically triggered flows. Customers receive their personalized cards within a week. Customers receive their personalized cards within a week. Customers receive their personalized cards within a week.",
  },
];

const intervalDurationInMs = 3000;

export default function FastLaunchSection() {
  const [openItem, setOpenItem] = useState("0");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newState = (parseInt(openItem) + 1) % accordionItems.length;

      setOpenItem(String(newState));
    }, intervalDurationInMs);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <Section className="bg-[#E3F8F8]">
      <Title className="text-center">
        Fast launch. Fast results. <br />
        <FancyTitle>Here's how.</FancyTitle>
      </Title>

      <div className="flex">
        <Accordion
          value={openItem}
          onValueChange={setOpenItem}
          type="single"
          className="gap-8 flex flex-col"
        >
          {accordionItems.map((item, i) => (
            <FastLaunchItem
              isActive={i === parseInt(openItem)}
              intervalDuration={intervalDurationInMs}
              description={item.description}
              title={item.title}
              index={i}
              key={item.title}
            />
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
