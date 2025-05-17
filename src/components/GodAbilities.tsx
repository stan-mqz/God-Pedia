type GodAbilitiesProps = {
  ability: string;
  description: string;
};

export const GodAbilities = ({ ability, description }: GodAbilitiesProps) => {
  return (
    <div>
      <p className="text-scarlet-red text-lg">{ability}:</p>
      <p className="text-white">{description}</p>
    </div>
  );
};
