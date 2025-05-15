type GodStatsProps = {
  stat : string
  value: number

}

export const GodStats = ({stat, value}: GodStatsProps) => {
  return (
    <div className="flex gap-3 justify-center">
      <p className="text-white">{stat}: </p>
      <span className="text-scarlet-red">{value}</span>
    </div>
  );
};
