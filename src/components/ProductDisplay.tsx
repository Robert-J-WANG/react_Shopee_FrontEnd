import { addToCart, useCartStore } from "@/stores/cartStore";
import { selectSize, useProductStore } from "@/stores/productStore";
import { formatCurrency } from "@/utils/formatCurrency";
import { useEffect, useState } from "react";

export const ProductDisplay = () => {
  const currentProduct = useProductStore((state) => state.initItems);
  const sizeOptions = useProductStore((state) => state.sizeOptions);
  const selectedSize = useProductStore((state) => state.selectedSize);
  // const selectedSize = useCartStore((state) => state.add);

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const unsb = useCartStore.subscribe(
      (state) => state.isOrdered,

      (isOrdered) => {
        setFlag(isOrdered);
      }
    );

    return unsb;
  }, []);

  return (
    <div className="flex flex-col items-center justify-between gap-10 py-10 text-xl md:flex-row">
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
      <div className="flex flex-col gap-5 md:gap-8 lg:gap-10 basis-1/2">
        <h1 className="text-xl font-bold xl:text-3xl lg:text-2xl ">
          {currentProduct.name}
        </h1>
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
          <h1 className="mb-4 text-lg font-medium md:text-xl lg:text-2xl">
            Select Size
          </h1>
          <div className="flex gap-4">
            {sizeOptions.map((sizeOption) => (
              <p
                key={sizeOption.id}
                className={`flex items-center justify-center w-10 lg:w-12 lg:h-12  h-10 rounded-lg cursor-pointer 
                  ${
                    sizeOption.size === selectedSize
                      ? "border-gray-800 border-2 text-black"
                      : "border-gray-500 border text-gray-500"
                  }
                `}
                onClick={() => selectSize(sizeOption.size)}
              >
                <span>{sizeOption.size}</span>
              </p>
            ))}
          </div>
        </div>
        <button
          className="w-1/2 text-base text-white md:text-lg lg:text-xl btn btn-error"
          onClick={() => addToCart(currentProduct)}
        >
          ADD TO CART
        </button>
        <div className="flex flex-col gap-3">
          <p>Category: {currentProduct.category}</p>
          <p>Tags: {currentProduct.tags}</p>
        </div>

        {/* alert message box 使用daisyui toast */}

        {flag ? (
          <div className="toast toast-top toast-end top-20">
            <div className="alert alert-success">
              <span>Your order add successfully!</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
