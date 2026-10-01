import {
  Leaf,
  Heart,
  Star,
  ChevronRight,
  ShieldCheck,
  Truck,
  Tag,
  Package,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const PlantDetails = () => {
  const {id} = useParams();
  const [plantsData, setPlantsData] = useState([]);
  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setPlantsData(data)
      });
     
    
  }, []);
   const findedData = plantsData.find((plantData)=> plantData.plantId == id);
   console.log(findedData);
  if (!findedData) {
  return <p>Loading...</p>;
}
  return (
    <div className="min-h-screen bg-[#fafbf9] text-gray-800">
      <main className="mx-auto max-w-7xl px-5 py-5 sm:py-8">
        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-green-700">
            Home
          </Link>
          <ChevronRight size={15} />
          <Link to="/plants" className="hover:text-green-700">
            Plants
          </Link>
          <ChevronRight size={15} />
          <span className="text-gray-700">{findedData.plantName}</span>
        </div>

        <section className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:gap-10">
          <div>
            <div className="relative overflow-hidden rounded-xl bg-[#e8e6df]">
              <img
                src={findedData.image}
                alt={findedData.providerName}
                className="h-85 w-full object-cover sm:h-107.5 lg:h-117.5"
              />
              <button
                type="button"
                className="absolute right-3 top-3 rounded-full bg-white/80 p-2.5 text-gray-600 shadow-sm"
              >
                <Heart size={19} />
              </button>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-3">
              {findedData.images.map((image, index) => (
                <div
                  key={image}
                  className={`overflow-hidden rounded-lg border-2 ${
                    index === 0 ? "border-green-700" : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${findedData.providerName} ${index + 1}`}
                    className="h-20 w-full bg-gray-100 object-cover sm:h-24"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                 {findedData.plantName}
                </h1>
                <span className="mt-2 inline-block rounded-md bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                  {findedData.category}
                </span>
              </div>
              <button
                type="button"
                className="rounded-full border border-gray-200 p-2 text-rose-500"
              >
                <Heart size={20} />
              </button>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <Star size={19} className="fill-amber-500 text-amber-500" />
              <span className="font-bold text-gray-800">{findedData.rating}</span>
              <span className="text-gray-500">(120 reviews)</span>
            </div>

            <p className="mt-4 text-3xl font-bold text-gray-900">${findedData.price}</p>

            <div className="mt-4 w-fit rounded-lg bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
              In Stock: {findedData.availableStock}
            </div>

            <div className="mt-5">
              <h2 className="mb-1 text-lg font-semibold">Description</h2>
              <p className="text-sm leading-relaxed text-gray-600">
               {findedData.description}
              </p>
            </div>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <ShieldCheck size={17} className="text-gray-500" />
                <span className="font-medium">Care Level:</span>
                <span className="ml-auto text-gray-600">{findedData.careLevel}</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck size={17} className="text-gray-500" />
                <span className="font-medium">Provider:</span>
                <span className="ml-auto text-gray-600">{findedData.providerName}</span>
              </div>
              <div className="flex items-center gap-3">
                <Tag size={17} className="text-gray-500" />
                <span className="font-medium">Category:</span>
                <span className="ml-auto text-gray-600">{findedData.category}</span>
              </div>
              <div className="flex items-center gap-3">
                <Package size={17} className="text-gray-500" />
                <span className="font-medium">Available Stock:</span>
                <span className="ml-auto text-gray-600">{findedData.availableStock}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-xl bg-[#edf7eb] p-5 sm:p-7">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100">
              <Leaf className="h-7 w-7 fill-green-700 text-green-700" />
            </div>
            <div>
              <h2 className="text-md font-bold text-gray-900 sm:text-2xl">
                Book a Plant Consultation
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Get expert advice on how to take care of this plant.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-green-700"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-green-700"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-[#176b45] py-3 text-sm font-semibold text-white transition hover:bg-[#125638]"
            >
              Book Now
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PlantDetails;
