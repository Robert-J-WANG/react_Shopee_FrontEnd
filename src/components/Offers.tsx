import exclusive_image from "@/assets/exclusive_image.png";

export const Offers = () => {
  return (
    <div className="container flex bg-gradient-to-br from-green-600/50 to-gray-200">
      {/* left */}
      <div className="flex items-center justify-center basis-1/2 ">
        <div className="flex flex-col justify-center gap-4 xl:gap-12 lg:gap-10 md:gap-8 sm:gap-6">
          <p className="text-2xl font-bold lg:text-5xl md:text-4xl sm:text-3xl xl:text-6xl">
            Exclusive
          </p>
          <p className="text-2xl font-bold lg:text-5xl md:text-4xl sm:text-3xl xl:text-6xl">
            Offers For You
          </p>
          <p className="text-sm xl:text-2xl lg:text-xl md:text-lg sm:text-base">
            ONLY ON BEST SELLERS PRODUCTS
          </p>
          {/* latest button */}
          <button className="w-48 text-white bg-red-500 rounded-full h-14 xl:w-80 lg:w-72 md:w-64 sm:w-56 btn">
            <p className="xl:text-2xl lg:text-xl md:text-lg ">check now</p>
          </button>
        </div>
      </div>

      {/* right */}
      <div className="flex items-center justify-center basis-1/2">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};
