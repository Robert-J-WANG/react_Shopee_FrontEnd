import { useProductStore } from "@/stores/productStore";
import { formatCurrency } from "@/utils/formatCurrency";

export const ProductDisplay = () => {
  const currentProduct = useProductStore((state) => state.initItems);
  const sizeOptions = useProductStore((state) => state.sizeOptions);
  return (
    <div className="flex items-center justify-between gap-5 py-10 text-xl">
      {/* left */}
      <div className="flex items-center justify-center gap-4 basis-1/2">
        {/* image lists */}
        <div className="flex flex-col items-center justify-center gap-5 basis-1/5">
          <img
            src={currentProduct.image}
            alt=""
            className="object-cover h-full"
          />
          <img
            src={currentProduct.image}
            alt=""
            className="object-cover h-full"
          />
          <img
            src={currentProduct.image}
            alt=""
            className="object-cover h-full"
          />
        </div>
        {/* image */}
        <div className="flex basis-4/5  h-[572px] justify-center items-center ">
          <img
            src={currentProduct.image}
            alt="/"
            className="object-cover h-full"
          />
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col gap-10 basis-1/2">
        <h1 className="text-3xl font-bold">{currentProduct.name}</h1>
        {/* rating */}
        <div className="rating">
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            defaultChecked
          />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
        </div>

        {/* price */}
        <p>
          <span className="text-gray-500 line-through">
            {formatCurrency(currentProduct.old_price)}
          </span>{" "}
          <span className="text-red-500">
            {formatCurrency(currentProduct.new_price)}
          </span>
        </p>
        {/* size options */}
        <div>
          <h1 className="mb-4 text-2xl font-medium">Select Size</h1>
          <div className="flex gap-4">
            {sizeOptions.map((sizeOption) => (
              <p
                key={sizeOption.id}
                className="flex items-center justify-center w-10 h-10 border border-gray-500 rounded-lg cursor-pointer"
              >
                <span>{sizeOption.size}</span>
              </p>
            ))}
          </div>
        </div>
        <button className="w-1/2 text-xl text-white btn btn-error">
          ADD TO CART
        </button>
        <div className="flex flex-col gap-3">
          <p>Category: {currentProduct.category}</p>
          <p>Tags: {currentProduct.tags}</p>
        </div>
      </div>
    </div>
  );
};
