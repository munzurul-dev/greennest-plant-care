import { use, useEffect, useState } from "react";
import PlantCard from "../PlantCard";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../PlantsLayout/Loading";

const PopularPlants = () => {
  const { loading } = use(AuthContext);
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);
  //console.log(plants);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-10">
      <div className="flex items-center gap-1">
        <div className="">
          <img
            className="w-15 h-15"
            src="https://i.postimg.cc/g2K06HGK/icon.png"
            alt="icon"
          />
        </div>
        <div className="">
          <h2 className="font-extrabold text-xl ">Popular Indoor Plants</h2>
          <p>HandPicked plants for a healther and greener home.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 lg:p-4 mt-2">
        {plants.slice(0, 4).map((plant) => (
          <PlantCard key={plant.plantId} plant={plant}></PlantCard>
        ))}
      </div>
    </div>
  );
};

export default PopularPlants;
