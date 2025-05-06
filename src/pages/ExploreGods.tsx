import { useLoaderData } from "react-router-dom";
import { GodCard } from "../components/GodCard";
import { SearchGodForm } from "../components/SearchGodForm";
import { getAllGods } from "../services/GodService";
import { God } from "../types/types";



export const loader = async () => {

  const gods = await getAllGods()

  return gods
}

export const ExploreGods = () => {

  

  const gods = useLoaderData() as God[]


  return (

    <>
      <SearchGodForm />

      <h2 className="text-center text-white text-3xl mt-16">
        Explore All Gods
      </h2>

      <GodCard />
    </>
  );
};
