import { useProductStore } from "@/stores/productStore";

export const ProductDisplay = () => {
  const currentProduct = useProductStore((state) => state.initItems);
  const sizeOptions = useProductStore((state) => state.sizeOptions);
  return (
    <div className="flex items-center justify-between gap-5 py-10">
      {/* left */}
      <div className="flex items-center justify-center gap-4 bg-green-400 basis-1/2">
        {/* image lists */}
        <div className="flex flex-col gap-4 basis-1/5">
          <img src={currentProduct.image} alt="" />
          <img src={currentProduct.image} alt="" />
          <img src={currentProduct.image} alt="" />
          <img src={currentProduct.image} alt="" />
        </div>
        {/* image */}
        <div className="bais-4/5">
          <img
            src={currentProduct.image}
            alt="/"
            className="object-fill h-full"
          />
        </div>
      </div>
      {/* right */}
      <div className="bg-yellow-300 basis-1/2">
        <h1>{currentProduct.name}</h1>
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
          <span>{currentProduct.old_price}</span>
          <span>{currentProduct.new_price}</span>
        </p>
        {/* size options */}
        <div>
          <h1>Select Size</h1>
          <div>
            {sizeOptions.map((sizeOption) => (
              <p key={sizeOption.id}>{sizeOption.size}</p>
            ))}
          </div>
        </div>
        <button className="btn btn-danger">ADD TO CART</button>
        <div>
          <p>category :{currentProduct.category}</p>
          <p>Tags :{currentProduct.tags}</p>
        </div>
      </div>
    </div>
  );
};
