import hand_icon from "@/assets/hand_icon.png";
import arrow from "@/assets/arrow.png";
import hero_image from "@/assets/hero_image.png";

export const Hero = () => {
  return (
    <div className="h-[calc(100vh-90px)] bg-gradient-to-br from-pink-700/30 to-bg-gray-200">
      <div className="container flex">
        {/* left */}
        <div className="flex flex-col justify-center gap-10 basis-1/2 pl-44 ">
          <h2 className="text-3xl">NEW ARRIVALS ONLY</h2>
          <div className="flex flex-col gap-2 font-bold text-7xl">
            {/* hand-hand-icon */}
            <div className="flex gap-2">
              <p>new</p>
              <img className="w-14" src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>
          {/* latest button */}
          <button className="text-white h-14 w-[320px] bg-red-500 rounded-full btn">
            <div className="text-xl">Latest Collections</div>
            <img src={arrow} alt="" />
          </button>
        </div>
        {/* hero right */}
        <div className="flex items-center justify-center basis-1/2">
          <img src={hero_image} alt="" />
        </div>
      </div>
    </div>
  );
};
