import React from "react";
import exclusive_image from "@/assets/exclusive_image.png";

export const Offers = () => {
  return (
    <div className="container flex bg-gradient-to-br from-green-600/50 to-gray-200">
      {/* left */}
      <div className="flex flex-col justify-center gap-5 basis-1/2 pl-44">
        <p className="text-6xl font-bold">Exclusive</p>
        <p className="text-6xl font-bold">Offers For You</p>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        {/* latest button */}
        <button className="text-white h-14 w-[320px] bg-red-500 rounded-full btn">
          <p className="text-xl">check now</p>
        </button>
      </div>

      {/* right */}
      <div className="flex items-center justify-center basis-1/2">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};
