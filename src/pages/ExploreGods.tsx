import { useLoaderData } from "react-router-dom";
import { GodCard } from "../components/GodCard";
import { SearchGodForm } from "../components/SearchGodForm";
import { getAllGods } from "../services/GodService";
import { God } from "../types/types";

export const loader = async () => {
  const gods = await getAllGods();

  return gods;
};

export const ExploreGods = () => {
  
  const gods = useLoaderData() as God[];

  return (
    <>
      <SearchGodForm />

      <h2 className="text-center text-white text-3xl my-16">
        Explorar Todos los Dioses
      </h2>

      <div className="grid grid-cols-3 gap-10 w-[90%] mx-auto">
        {gods.map((god) => (
          <GodCard key={god._id} god={god} />
        ))}
      </div>
    </>
  );
};
