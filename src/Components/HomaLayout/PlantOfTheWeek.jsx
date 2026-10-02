import { ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router";

const PlantOfTheWeek = () => {
  const navigate = useNavigate();
  return (
    <section className="py-12">
      <div
        className="min-h-100  rounded-2xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://i.postimg.cc/J0ZGGwTP/plant-of-the-week.png")',
        }}
      >
        <div className="flex min-h-100  lg:ml-40 items-center">
          <div className="ml-25 w-80 px-6 py-8 md:ml-auto md:w-1/2 md:px-10">
            <p className="mb-1 text-md font-bold text-primary">
              Plant of the Week
            </p>

            <h2 className="text-2xl font-extrabold text-text md:text-3xl">
              Monstera Deliciosa
            </h2>

            <p className="mt-2 max-w-md text-md md:text-sm leading-5 text-black md:text-muted">
              A stunning leafy plant that adds a tropical vibe to your space.
            </p>

            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-1 text-warning">
                <Star className="text-orange-300" size={15}  fill="currentColor" />
                <span className="text-sm font-bold  text-orange-300 ">4.9</span>
              </div>

              <span className="text-xs text-muted">(150)</span>
            </div>

            <div className="mt-3 flex items-center gap-4">
              <span className="text-2xl font-extrabold text-text">$24</span>

              <button onClick={()=> navigate("/plants")} className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white transition hover:bg-footer cursor-pointer">
                Discover Plant
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheWeek;
