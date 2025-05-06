import { GodCard } from "../components/GodCard";
import { SearchGodForm } from "../components/SearchGodForm";
import { getAllGods } from "../services/GodService";



export const loader = async () => {
  const gods = await getAllGods()

  return gods
}

export const ExploreGods = () => {

  

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
