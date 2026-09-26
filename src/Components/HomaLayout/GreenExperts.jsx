import { Heart, ArrowRight, } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const GreenExperts = () => {
  const experts = [
    {
      name: "Emma Green",
      role: "Indoor Plant Expert",
      image: "https://i.pravatar.cc/300?img=47",
    },
    {
      name: "Liam Carter",
      role: "Plant Nutrition Specialist",
      image: "https://i.pravatar.cc/300?img=12",
    },
    {
      name: "Sophia Lee",
      role: "Urban Gardening Expert",
      image: "https://i.pravatar.cc/300?img=44",
    },
    {
      name: "Noah Ahmed",
      role: "Garden Care Specialist",
      image: "https://i.pravatar.cc/300?img=11",
    },
  ];

  return (
    <section className="py-12">
     
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
          className="h-15 w-15"
          src="https://i.postimg.cc/g2K06HGK/icon.png"
          alt="Plant care icon"
        />

          <div>
            <h2 className="text-xl font-extrabold md:text-2xl">
              Meet Our Green Experts
            </h2>

            <p className="text-xs text-muted md:text-sm">
              Learn from the best plant care professionals.
            </p>
          </div>
        </div>

        <button className="hidden items-center gap-1 text-sm font-bold text-primary md:flex">
          View All
          <ArrowRight size={16} />
        </button>
      </div>

     
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 ">
        {experts.map((expert) => (
          <div
            key={expert.name}
            className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
         
            <div className="relative h-48 overflow-hidden bg-surface">
              <img
                src={expert.image}
                alt={expert.name}
                className="h-full w-full object-cover"
              />

              <button className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-primary shadow-sm cursor-pointer">
                <Heart size={16} />
              </button>
            </div>

           
            <div className="p-3 text-center">
              <h3 className="font-bold text-text">{expert.name}</h3>

              <p className="mt-1 text-xs text-muted">{expert.role}</p>

             
              <div className="mt-3 flex justify-center gap-3">
                <FaInstagram
                  size={15}
                  className="cursor-pointer text-text transition hover:text-primary"
                />

                <FaFacebookF
                  size={15}
                  className="cursor-pointer text-text transition hover:text-primary"
                />

                <FaLinkedinIn
                  size={15}
                  className="cursor-pointer text-text transition hover:text-primary"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GreenExperts;
