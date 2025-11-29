import Section from "@/components/common/Section";
import Title, { FancyTitle } from "@/components/common/Title";
import type { Review } from "../reviews/ReviewCard";
import ReviewCard from "../reviews/ReviewCard";
import { Button } from "@/components/ui/button";
import { InfiniteScroll } from "@/components/common/InfiniteScroll";

const reviews: Review[] = [
  {
    avatarUrl: "landing/reviewAvatars/avatar2.png",
    description:
      "Been using PostPilot for years. Good for re-engagement. And you can get creative with your messaging.",
    nickname: "Helen Guo",
    username: "@HelenGuo_",
  },
  {
    avatarUrl: "landing/reviewAvatars/avatar1.png",
    description:
      "Email is a killer channel, but if you layer in postal mail you can really supercharge results. The team at @getpostpilot will spark ideas for ya.",
    nickname: "Jon Tucker",
    username: "@JonTuckerUSA",
  },
  {
    avatarUrl: "landing/reviewAvatars/avatar3.png",
    description:
      "We have done some rad winbacks to 360-720 days since purchase that have rocked. PostPilot team is one of my favs.",
    nickname: "Nathan Woods",
    username: "@HeisNathan",
  },
  {
    avatarUrl: "landing/reviewAvatars/avatar1.png",
    description:
      "Another +1 for PostPilot. Have only done winbacks, but it's been wonderful. Their team is also top notch. Super helpful every time we set something up.",
    nickname: "Chris Lander",
    username: "@chris_basis",
  },
];
export default function ReviewsSection() {
  return (
    <Section className="px-0 md:px-0 xl:px-0">
      <Title className="text-center">
        PostPilot is 🔥 for <FancyTitle>DTC</FancyTitle>
      </Title>

      <div className="flex gap-8 overflow-hidden">
        <InfiniteScroll>
          {reviews.map((review) => (
            <ReviewCard key={review.username} review={review} />
          ))}
        </InfiniteScroll>
      </div>

      <div className="w-full flex justify-center">
        <Button className="mt-16 uppercase px-16" size="hero">
          TRY IT RISK FREE
        </Button>
      </div>
    </Section>
  );
}
