import { FaArrowRightLong } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router";

const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]}
      effect="fade"
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className="h-135"
    >
  
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://i.postimg.cc/wvp9Btmn/A-Greener-Happier-Interior.png")`,
          }}
        >
          <div className="flex h-full flex-col justify-center space-y-5 pl-10 md:pl-20 lg:pl-52">
            <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Bring <span className="text-primary">Nature</span> Into Your
              Home
            </h1>

            <p className="max-w-xl text-lg font-medium text-text md:text-xl">
              Discover beautiful indoor plants and learn how to keep them
              healthy, fresh, and thriving.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/plants" className="flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 font-bold text-white transition hover:bg-footer cursor-pointer">
                Explore Plants
                <FaArrowRightLong />
              </Link>

              <button className="rounded-2xl border-2 border-white md:border-primary px-5 py-3 font-bold text-white  transition hover:bg-primary hover:text-white cursor-pointer">
                Get Expert Advice
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

     
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://i.postimg.cc/tRdYFbRj/A-Greener-Happier-Sanctuary.png")`,
          }}
        >
          <div className="flex h-full flex-col justify-center space-y-5 pl-10 md:pl-20 lg:pl-65">
            <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Grow <span className="text-primary">Something</span> Beautiful
            </h1>

            <p className="max-w-xl text-lg font-medium text-text md:text-xl">
              Find the perfect plants to make your home feel fresh and alive.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 font-bold text-white transition hover:bg-footer cursor-pointer">
                Explore Plants
                <FaArrowRightLong />
              </button>

              <button className="rounded-2xl border-2 border-white md:border-primary  px-5 py-3 font-bold text-white md:text-primary transition hover:bg-primary hover:text-white cursor-pointer">
                Get Expert Advice
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

    
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://i.postimg.cc/FHRGkD4p/hero3.png")`,
          }}
        >
          <div className="flex h-full flex-col justify-center space-y-5 pl-10 md:pl-20 lg:pl-58">
            <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Wake Up <span className="text-primary">Greener</span>
            </h1>

            <p className="max-w-xl text-lg font-medium text-text md:text-xl">
              Create a calm, refreshing and greener space with beautiful
              indoor plants.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-2xl bg-primary  px-5 py-3 font-bold text-white transition hover:bg-footer cursor-pointer">
                Explore Plants
                <FaArrowRightLong />
              </button>

              <button className="rounded-2xl border-2 border-white md:border-primary px-5 py-3 font-bold text-white md:text-primary transition hover:bg-primary hover:text-white cursor-pointer">
                Get Expert Advice
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;