import product_12 from "@/assets/product_12.png";

export const Item = () => {
  return (
    <div className="shadow-xl card w-[350px] bg-base-100">
      <figure>
        <img src={product_12} alt="Shoes" className="object-cover w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="justify-end card-actions">
          <div className="badge badge-outline">new price</div>
          <div className="text-gray-300 line-through badge badge-outline">
            old price
          </div>
        </div>
      </div>
    </div>
  );
};
