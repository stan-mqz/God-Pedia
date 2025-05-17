type GodAttributesProps = {
  attribute: string;
  description: string;
};

export const GodAttributes = ({ attribute, description }: GodAttributesProps) => {
  return (
    <div>
      <p className="text-scarlet-red text-lg">{attribute}:</p>
      <p className="text-white">{description}</p>
    </div>
  );
};
