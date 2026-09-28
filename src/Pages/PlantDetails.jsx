import {
  Leaf,
  Heart,
  Star,
  ChevronRight,
  ShieldCheck,
  Truck,
  Tag,
  Package,
  Instagram,
  Facebook,
  Camera,
} from "lucide-react";
import { Link } from "react-router-dom";

const PlantDetails = () => {
  const images = [
    "https://images.unsplash.com/photo-1593482892290-f54927ae2b7c?w=700",
    "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=700",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=700",
  ];

  return (
    <div className="min-h-screen bg-[#fafbf9] text-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <Link to="/" className="flex items-center gap-1.5">
            <Leaf className="h-8 w-8 fill-green-700 text-green-700" />
            <span className="text-xl font-bold text-gray-900">GreenNest</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link to="/" className="transition hover:text-green-700">
              Home
            </Link>
            <Link to="/plants" className="transition hover:text-green-700">
              Plants
            </Link>
            <Link to="/profile" className="transition hover:text-green-700">
              My Profile
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-full bg-gray-100 p-2 text-gray-600"
            >
              <Camera size={17} />
            </button>
            <img
              src="https://i.pravatar.cc/100?img=47"
              alt="User"
              className="h-8 w-8 rounded-full border border-gray-200 object-cover"
            />
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-5 sm:py-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-green-700">
            Home
          </Link>
          <ChevronRight size={15} />
          <Link to="/plants" className="hover:text-green-700">
            Plants
          </Link>
          <ChevronRight size={15} />
          <span className="text-gray-700">Snake Plant</span>
        </div>

        {/* Product Section */}
        <section className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:gap-10">
          {/* Image Gallery */}
          <div>
            <div className="relative overflow-hidden rounded-xl bg-[#e8e6df]">
              <img
                src={images[0]}
                alt="Snake Plant"
                className="h-[340px] w-full object-cover sm:h-[430px] lg:h-[470px]"
              />
              <button
                type="button"
                className="absolute right-3 top-3 rounded-full bg-white/80 p-2.5 text-gray-600 shadow-sm"
              >
                <Heart size={19} />
              </button>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-3">
              {images.map((image, index) => (
                <div
                  key={image}
                  className={`overflow-hidden rounded-lg border-2 ${
                    index === 0 ? "border-green-700" : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Snake Plant view ${index + 1}`}
                    className="h-20 w-full bg-gray-100 object-cover sm:h-24"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                  Snake Plant
                </h1>
                <span className="mt-2 inline-block rounded-md bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                  Air Purifier
                </span>
              </div>
              <button
                type="button"
                className="rounded-full border border-gray-200 p-2 text-rose-500"
              >
                <Heart size={20} />
              </button>
            </div>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2 text-sm">
              <Star size={19} className="fill-amber-500 text-amber-500" />
              <span className="font-bold text-gray-800">4.8</span>
              <span className="text-gray-500">(120 reviews)</span>
            </div>

            {/* Price */}
            <p className="mt-4 text-3xl font-bold text-gray-900">$18</p>

            {/* Stock */}
            <div className="mt-4 w-fit rounded-lg bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
              In Stock: 10
            </div>

            {/* Description */}
            <div className="mt-5">
              <h2 className="mb-1 text-lg font-semibold">Description</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                A hardy plant that purifies indoor air and thrives in low light.
                Perfect for beginners, the Snake Plant is known for its
                resilience and unique upright leaves.
              </p>
            </div>

            {/* Specifications */}
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <ShieldCheck size={17} className="text-gray-500" />
                <span className="font-medium">Care Level:</span>
                <span className="ml-auto text-gray-600">Easy</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck size={17} className="text-gray-500" />
                <span className="font-medium">Provider:</span>
                <span className="ml-auto text-gray-600">UrbanGreen Studio</span>
              </div>
              <div className="flex items-center gap-3">
                <Tag size={17} className="text-gray-500" />
                <span className="font-medium">Category:</span>
                <span className="ml-auto text-gray-600">Air Purifier</span>
              </div>
              <div className="flex items-center gap-3">
                <Package size={17} className="text-gray-500" />
                <span className="font-medium">Available Stock:</span>
                <span className="ml-auto text-gray-600">10</span>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="mt-10 rounded-xl bg-[#edf7eb] p-5 sm:p-7">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100">
              <Leaf className="h-7 w-7 fill-green-700 text-green-700" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
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

      {/* Footer */}
      <footer className="mt-12 border-t-4 border-green-700 bg-[#063d30] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-8 md:grid-cols-3">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 fill-white text-white" />
              <span className="text-xl font-bold">GreenNest</span>
            </div>
            <p className="mt-3 text-sm text-gray-300">
              Grow better. Live greener.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Quick Links</h3>
            <div className="flex flex-col gap-2 text-xs text-gray-300">
              <Link to="/about" className="hover:text-white">
                About
              </Link>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Follow Us</h3>
            <div className="flex items-center gap-4">
              <Instagram size={19} />
              <Facebook size={19} />
              <span className="text-lg font-bold">℘</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 px-5 py-4">
          <p className="mx-auto max-w-7xl text-xs text-gray-300">
            © 2025 GreenNest. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PlantDetails;
