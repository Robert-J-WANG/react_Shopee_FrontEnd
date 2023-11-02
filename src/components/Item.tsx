import { formatCurrency } from "@/utils/formatCurrency";

type Tprops = {
  item: TItem;
};

export const Item = ({ item }: Tprops) => {
  return (
    <div className="shadow-xl card w-[350px] bg-base-100">
      <figure>
        <img src={item?.image} alt="Shoes" className="object-cover w-full" />
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
  );
};
