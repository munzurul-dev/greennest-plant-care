import { Droplets, Sun, Sprout } from "lucide-react";

const CareTips = () => {
  const tips = [
    {
      icon: Droplets,
      title: "Watering",
      description: "Know when and how much to water.",
    },
    {
      icon: Sun,
      title: "Sunlight",
      description: "Give every plant the right amount of light.",
    },
    {
      icon: Sprout,
      title: "Fertilizing",
      description: "Keep your plants nourished and healthy.",
    },
  ];

  return (
    <section className="py-12">
      
      <div className="mb-8 flex items-center gap-3">
        <img
          className="h-15 w-15"
          src="https://i.postimg.cc/g2K06HGK/icon.png"
          alt="Plant care icon"
        />

        <div>
          <h2 className="text-xl font-extrabold md:text-2xl">
            Plant Care Tips
          </h2>

          <p className="text-sm text-muted">
            Simple tips for happy and healthy plants.
          </p>
        </div>
      </div>

      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {tips.map((tip, index) => {
          const Icon = tip.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-4 rounded-xl bg-[#EEF7EA] p-4 lg:p-10"
            >
              
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white">
                <Icon
                  size={30}
                  strokeWidth={2}
                  className="text-primary"
                />
              </div>

              
              <div>
                <h3 className="font-bold text-text">
                  {tip.title}
                </h3>

                <p className="mt-1 text-xs leading-4 text-muted">
                  {tip.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CareTips;