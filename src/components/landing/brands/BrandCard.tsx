interface IProps {
  cardImagePath: string;
  brandName?: string;
}

export default function BrandCard({ cardImagePath, brandName }: IProps) {
  return (
    <div>
      <img src={cardImagePath} alt={brandName || "Brand"} />
    </div>
  );
}
