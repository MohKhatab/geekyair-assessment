import { FaTwitter } from "react-icons/fa";

export type Review = {
  avatarUrl: string;
  nickname: string;
  username: string;
  description: string;
};

interface IProps {
  review: Review;
}

export default function ReviewCard({ review }: IProps) {
  return (
    <div className="border-2 border-[#2E2F35] rounded-xl p-8">
      <div className="flex gap-4 items-center">
        <img
          src={review.avatarUrl}
          alt={review.nickname}
          className="size-16 rounded-full object-cover"
        />

        <div>
          <p>{review.nickname}</p>
          <p>{review.username}</p>
        </div>

        <FaTwitter className="text-3xl cursor-pointer ml-auto" />
      </div>

      <p className="mt-4 font-medium text-[#58595D]">{review.description}</p>
    </div>
  );
}
