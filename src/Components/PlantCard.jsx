import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  const { plantName, category, price, rating, image, careLevel } = plant;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-60 overflow-hidden bg-surface">
        <img
          src={image}
          alt={plantName}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full bg-hero px-3 py-1 text-xs font-semibold text-primary">
            {category}
          </span>

          <span className="text-sm font-semibold text-warning">★ {rating}</span>
        </div>

        <h3 className="mb-2 text-xl font-bold text-text">{plantName}</h3>

        <div className="mb-4 flex items-center justify-between">
          <p className="text-lg font-bold text-primary">${price}</p>

          <p className="text-sm text-muted">{careLevel} Care</p>
        </div>

        <Link
          to={`/plants/plantDetails/${plant.plantId}`}
          className="block text-center w-full rounded-xl bg-primary px-4 py-3 font-bold text-white transition hover:bg-footer cursor-pointer"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PlantCard;
