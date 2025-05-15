import { useGodStore } from "../store";
import { God } from "../types/types";
import { GodModal } from "./GodModal";
import { GodStats } from "./GodStats";

type GodCardProps = {
  god: God;
};

export const GodCard = ({ god }: GodCardProps) => {

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

              <div className="mt-2">
                <GodStats stat="Ataque" value={god.attack} />

                <GodStats stat="Defensa" value={god.defense} />

                <GodStats stat="Velocidad" value={god.speed} />

                <GodStats stat="Salud" value={god.health} />

                <GodStats stat="Mana" value={god.mana} />
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <GodModal god={god} />
    </>
  );
};
