import { useProductStore } from "@/stores/productStore";

export const ProductDisplay = () => {
  const currentProduct = useProductStore((state) => state.initItems);
  console.log(currentProduct);
  return (
    <div className="flex items-center justify-between gap-5 py-10">
      {/* left */}
      <div className="flex items-center justify-center bg-green-400 basis-1/2">
        <img src={currentProduct.image} alt="/" />
      </div>
      {/* right */}
      <div className="bg-yellow-300 basis-1/2">
        <ul>
          <li>{currentProduct.name}</li>
          <li>{currentProduct.desc}</li>
          <li>{currentProduct.tags}</li>
        </ul>
      </div>
    </div>
  );
};
