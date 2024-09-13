import hand_icon from "@/assets/hand_icon.png";
import arrow from "@/assets/arrow.png";
import hero_image from "@/assets/hero_image.png";

export const Hero = () => {
  return (
    <div className=" bg-gradient-to-br from-purple-700/30 to-bg-gray-200">
      <div className="container flex items-center justify-center md:gap-14 xl:gap-20">
        {/* left */}
        <div className="flex items-center justify-end ">
          <div className="flex flex-col justify-center gap-10 ">
            <h2 className="text-lg xl:text-3xl lg:text-2xl md:text-xl">
              NEW ARRIVALS ONLY
            </h2>
            <div className="flex flex-col gap-2 text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
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
            <button className="px-5 py-2 text-white bg-red-500 rounded-full btn">
              <div className="text-xs md:text-base lg:text-lg xl:text-xl">
                Latest Collections
              </div>
              <img className="hidden sm:block" src={arrow} alt="" />
            </button>
          </div>
        </div>
        {/* hero right */}
        <div className="flex items-center justify-start ">
          <img className="h-full" src={hero_image} alt="" />
        </div>
      </div>
    </div>
  );
};
