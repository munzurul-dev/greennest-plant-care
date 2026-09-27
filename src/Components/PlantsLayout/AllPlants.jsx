import { useEffect, useState } from "react";
import PlantCard from "../PlantCard";
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const AllPlants = () => {
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllPlants(data);
      });
  }, []);

  console.log("Plants:", allPlants);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between gap-5 items-center  mt-5">
       
        <div className="flex w-full items-center gap-2 rounded-md border-2 border-gray-300 px-3 py-2 focus-within:border-primary md:w-80">
          <IoSearchOutline size={20} className="shrink-0 text-gray-500" />
          <input
            type="search"
            placeholder="Search plants..."
            className="w-full min-w-0 flex-1 bg-transparent text-sm outline-none"
          />
        </div>
        <div className="flex items-center gap-10 border rounded-md px-4 py-2 border-gray-300 ">
          <p>All Categories</p>
          <FaChevronDown />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 ">
        {allPlants.map((plant) => (
          <PlantCard key={plant.plantId} plant={plant}></PlantCard>
        ))}
      </div>
    </div>
  );
};

export default AllPlants;
