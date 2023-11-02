import { Offers } from "@/components/Offers";
import { Hero } from "@/components/Hero";
import { Popular } from "@/components/Popular";
import { NewCollections } from "@/components/NewCollections";

export const Shop = () => {
  return (
    <div className="bg-gradient-to-br from-pink-300 to-gray-50 scroll-smooth">
      <div className="container">
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
      </div>
    </div>
  );
};
