import { useGodStore } from "../store";
import { God } from "../types/types";
import { GodModal } from "./GodModal";

type GodCardProps = {
  god: God;
};

export const GodCard = ({ god }: GodCardProps) => {
  const stats = {
    Ataque: god.attack,
    Defensa: god.defense,
    Velocidad: god.speed,
    Salud: god.health,
    Mana: god.mana,
  };

  const openModal = useGodStore((state) => state.openModal);

  return (
    <>
      <div className="border border-gold cursor-pointer" onClick={openModal}>
        <div className="p-4 border border-b-gold">
          <h2 className="text-center text-3xl text-scarlet-red">{god.name}</h2>
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-full">
            <img className="w-full h-80" src={god.image} alt="God Image" />
          </div>

          <div>
            <div className="px-8 pb-4">
              <p className="text-white border-b border-gold p-2">
                {god.description}
              </p>

              <ul className="text-center mt-5">
                {Object.entries(stats).map(([name, value]) => (
                  <li className="flex justify-center gap-4" key={name}>
                    <span className="text-white">{name}:</span>
                    <span className="text-scarlet-red">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

        <GodModal
        god={god}
        />


    </>
  );
};
