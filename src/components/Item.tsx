import { formatCurrency } from "@/utils/formatCurrency";
import { Link } from "react-router-dom";

type Tprops = {
  item: TItem;
};

export const Item = ({ item }: Tprops) => {
  return (
    <Link
      to={`/react_Shoppia/product/${item.id}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className="shadow-xl card w-[300px] h-[500px] bg-base-100 hover:scale-105 duration-500 cursor-pointer">
        <figure>
          <img src={item?.image} alt="Shoes" className="object-cover w-full " />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item?.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <div className="justify-end card-actions">
            <div className="text-lg badge badge-outline">
              {formatCurrency(item?.new_price)}
            </div>
            <div className="text-lg text-gray-300 line-through badge badge-outline">
              {formatCurrency(item?.old_price)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
