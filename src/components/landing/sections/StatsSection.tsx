import Section from "@/components/common/Section";
import Title, { FancyTitle } from "@/components/common/Title";

export default function StatsSection() {
  return (
    <Section className="bg-[#F3FAFA]">
      <Title className="text-center">
        Why use direct mail?
        <br />
        It <FancyTitle>works</FancyTitle> like crazy.
      </Title>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 xl:gap-40 items-center justify-center mt-8">
        <div className="flex flex-col justify-center items-center w-[228px]">
          <Title className="mb-1">28X</Title>
          <p className="text-sm text-center text-[#58595D]">
            Higher response rate than email & digital
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-[228px]">
          <img src="landing/stats/stats.png" className="mb-2" />
          <p className="text-sm text-center text-[#58595D]">
            Your messages get read
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-[228px]">
          <Title className="mb-1">17 Days</Title>
          <p className="text-sm text-center text-[#58595D]">
            Lifespan of a postcard vs. seconds for email or SMS
          </p>
        </div>
      </div>
    </Section>
  );
}
