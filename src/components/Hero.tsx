import hand_icon from "@/assets/hand_icon.png";
import arrow from "@/assets/arrow.png";
import hero_image from "@/assets/hero_image.png";

export const Hero = () => {
  return (
    <div className=" bg-gradient-to-br from-pink-700/30 to-bg-gray-200">
      <div className="container flex ">
        {/* left */}
        <div className="flex items-center justify-center basis-1/2 ">
          <div className="flex flex-col justify-center gap-4 xl:gap-12 lg:gap-10 md:gap-8 sm:gap-6">
            <h2 className="text-lg xl:text-4xl lg:text-3xl md:text-2xl">
              NEW ARRIVALS ONLY
            </h2>
            <div className="flex flex-col gap-2 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              {/* hand-hand-icon */}
              <div className="flex gap-2">
                <p>new</p>
                <img
                  className="w-6 xl:w-14 lg:w-12 md:w-10 sm:w-8"
                  src={hand_icon}
                  alt=""
                />
              </div>
              <p>collections</p>
              <p>for everyone</p>
            </div>
            {/* latest button */}
            <button className="w-56 text-white bg-red-500 rounded-full h-14 sm:w-64 md:w-72 lg:w-80 xl:w-[400px] btn">
              <div className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Latest Collections
              </div>
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
        {/* hero right */}
        <div className="flex items-center justify-center basis-1/2">
          <img src={hero_image} alt="" />
        </div>
      </div>
    </div>
  );
};
