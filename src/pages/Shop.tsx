import { Offers } from "@/components/Offers";
import { Hero } from "@/components/Hero";
import { Popular } from "@/components/Popular";
import { NewCollections } from "@/components/NewCollections";

export const Shop = () => {
  return (
    <div className="bg-gray-200 scroll-smooth">
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </div>
  );
};
