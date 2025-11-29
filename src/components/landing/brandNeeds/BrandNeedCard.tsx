export type BrandNeedType = {
  title: string;
  description: string;
  imagePath: string;
  color: string;
};

interface IProps {
  brandNeed: BrandNeedType;
}

export default function BrandNeedCard({ brandNeed }: IProps) {
  return (
    <div
      style={{ backgroundColor: brandNeed.color }}
      className="p-10 rounded-lg text-center flex flex-col justify-center max-w-sm mx-auto"
    >
      <img
        src={brandNeed.imagePath}
        className="mx-auto"
        alt={brandNeed.title}
      />
      <p className="mt-12 mb-2 text-2xl font-bold">{brandNeed.title}</p>
      <p className="text-[#58595D]">{brandNeed.description}</p>
    </div>
  );
}
