import { God } from "../types/types";

type GodCardProps = {
  god: God;
};

export const GodCard = ({ god }: GodCardProps) => {


  const stats = {
    Attack: god.attack,
    Defense: god.defense,
    Speed: god.speed,
    Health: god.health,
    Mana: god.mana,
  }
    
  

  console.log(Object.entries(stats))

  return (
    <div className="border border-gold cursor-pointer">
      <div className="p-4 border border-b-gold">
        <h2 className="text-center text-3xl text-scarlet-red">{god.name}</h2>
      </div>

      <div className="flex flex-col gap-4">
        <div className="w-full">
          <img className="w-full h-80" src={god.image} alt="God Image" />
        </div>

        <div>
          {/* Fix: Translate text to English */}
          <div className="px-8 pb-4">
            <p className="text-white">{god.description}</p>

            <ul className="text-center mt-5">
              {
              Object.entries(stats).map(
              (
                [name, value]
              ) => (
                <li className="flex justify-center gap-4">
                  <span className="text-white">{name}:</span>
                  <span className="text-scarlet-red">{value}</span>
                </li>
              ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
