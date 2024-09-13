import exclusive_image from "@/assets/exclusive_image.png";

export const Offers = () => {
  return (
    <div className="container flex items-center justify-center gap-10 md:gap-14 xl:gap-20 bg-gradient-to-br from-red-700/50 to-gray-200">
      {/* left */}
      <div className="flex items-center justify-center ">
        <div className="flex flex-col justify-center gap-10 ">
          <p className="text-lg xl:text-3xl lg:text-2xl md:text-xl">
            Exclusive
          </p>
          <p className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
            Offers For You
          </p>
          <p className="text-sm xl:text-2xl lg:text-xl md:text-lg sm:text-base">
            ONLY ON BEST SELLERS PRODUCTS
          </p>
          {/* latest button */}
          <button className="px-5 py-2 text-white bg-red-500 rounded-full btn">
            <p className="text-xs md:text-base lg:text-lg xl:text-xl ">
              check now
            </p>
          </button>
        </div>
      </div>

      {/* right */}
      <div className="flex items-center justify-center">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};
