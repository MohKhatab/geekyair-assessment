import Section from "@/components/common/Section";
import Title, { FancyTitle } from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CaseStudySection() {
  return (
    <Section className="grid lg:grid-cols-2 gap-16 bg-[#EEECFF]">
      <div>
        <img src="landing/caseStudies/banners/obvi.png" />
      </div>
      <div className="flex flex-col gap-8 lg:gap-12">
        <Title className="mb-0">
          How <FancyTitle>Obvi</FancyTitle> Drives
          <br /> Profits with Hands-Off Postcard Campaigns
        </Title>

        <p>
          The 🚀 supplements brand wanted to offset high ad costs and reach
          dormant customers. They scored 1000%+ ROIs.
        </p>

        <div className="flex gap-6 sm:gap-12">
          <CaseStudyStatistic stat="1468%" name="ROI" />
          <CaseStudyStatistic stat="8.59%" name="Conversion Rate" />
          <CaseStudyStatistic stat="$73,457" name="Sales Generated" />
        </div>

        <Button
          size="hero"
          className="px-12 uppercase w-full sm:w-fit"
          variant="secondary"
        >
          Read Case study
        </Button>

        <Tabs defaultValue="1">
          <TabsList className="bg-transparent">
            <TabsTrigger
              value="1"
              className="bg-transparent data-[state=active]:shadow-none border-0 border-b-2 border-b-[#C7C5D5]/50
              data-[state=active]:border-[#009387] rounded-none data-[state=active]:bg-transparent px-2 sm:px-6 pb-8 cursor-pointer
              hover:opacity-50 data-[state=active]:opacity-100 opacity-20 transition-all"
            >
              <img src="landing/caseStudies/logos/obvi.png" alt="" />
            </TabsTrigger>
            <TabsTrigger
              value="2"
              className="bg-transparent data-[state=active]:shadow-none border-0 border-b-2 border-b-[#C7C5D5] 
              data-[state=active]:border-[#009387] rounded-none data-[state=active]:bg-transparent px-2 sm:px-6 pb-8 cursor-pointer
              hover:opacity-50 data-[state=active]:opacity-100 opacity-20 transition-all"
            >
              <img src="landing/caseStudies/logos/bulletproof.png" alt="" />
            </TabsTrigger>
            <TabsTrigger
              value="3"
              className="bg-transparent data-[state=active]:shadow-none border-0 border-b-2 border-b-[#C7C5D5]/50
              data-[state=active]:border-[#009387] rounded-none data-[state=active]:bg-transparent px-2 sm:px-6 pb-8 cursor-pointer
              hover:opacity-50 data-[state=active]:opacity-100 opacity-20 transition-all"
            >
              <img src="landing/caseStudies/logos/boom.png" alt="" />
            </TabsTrigger>
            <TabsTrigger
              value="4"
              className="bg-transparent data-[state=active]:shadow-none border-0 border-b-2 border-b-[#C7C5D5]/50
              data-[state=active]:border-[#009387] rounded-none data-[state=active]:bg-transparent px-2 sm:px-6 pb-8 cursor-pointer
              hover:opacity-50 data-[state=active]:opacity-100 opacity-20 transition-all"
            >
              <img src="landing/caseStudies/logos/orbitbaby.png" alt="" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </Section>
  );
}

function CaseStudyStatistic({ stat, name }: { stat: string; name: string }) {
  return (
    <div>
      <p className="text-xl sm:text-4xl font-bold">{stat}</p>
      <p className="mt-1 text-[#58595D] text-sm font-medium">{name}</p>
    </div>
  );
}
