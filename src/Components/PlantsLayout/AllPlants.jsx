import { use, useEffect, useMemo, useState } from "react";
import PlantCard from "../PlantCard";
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "./Loading";

const AllPlants = () => {
  const [allPlants, setAllPlants] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [plantsLoading, setPlantsLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  const { loading } = use(AuthContext);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        setPlantsLoading(true);
        setFetchError("");

        const res = await fetch("/plants.json");

        if (!res.ok) {
          throw new Error("Failed to load plants");
        }

        const data = await res.json();
        setAllPlants(data);
      } catch (error) {
        setFetchError(error.message || "Something went wrong");
      } finally {
        setPlantsLoading(false);
      }
    };

    fetchPlants();
  }, []);

  const categories = useMemo(() => {
    return [
      "All Categories",
      ...new Set(allPlants.map((plant) => plant.category)),
    ];
  }, [allPlants]);

  const filteredPlants = useMemo(() => {
    return allPlants.filter((plant) => {
      const matchesSearch = plant.plantName
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      const matchesCategory =
        selectedCategory === "All Categories" ||
        plant.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [allPlants, search, selectedCategory]);

  if (loading || plantsLoading) {
    return <Loading />;
  }

  if (fetchError) {
    return <p className="py-10 text-center text-red-500">{fetchError}</p>;
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between gap-5 items-center mt-5">
        <div className="flex w-full items-center gap-2 rounded-md border-2 border-gray-300 px-3 py-2 focus-within:border-primary md:w-80">
          <IoSearchOutline size={20} className="shrink-0 text-gray-500" />

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search plants..."
            className="w-full min-w-0 flex-1 bg-transparent text-sm outline-none"
          />
        </div>

        <div className="relative flex w-full md:w-auto items-center gap-3 border rounded-md px-4 py-2 border-gray-300">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-44 appearance-none bg-transparent pr-6 outline-none cursor-pointer text-sm"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <FaChevronDown
            size={12}
            className="pointer-events-none absolute right-4 text-gray-500"
          />
        </div>
      </div>

      <p className="mt-5 text-sm text-gray-500">
        Showing {filteredPlants.length} of {allPlants.length} plants
      </p>

      {filteredPlants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {filteredPlants.map((plant) => (
            <PlantCard key={plant.plantId} plant={plant} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            No plants found!
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Try another search or category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setSelectedCategory("All Categories");
            }}
            className="mt-4 rounded-lg bg-[#176b45] px-5 py-2 text-sm font-semibold text-white hover:bg-[#125638]"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default AllPlants;
