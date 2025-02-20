import { useProductStore } from "@/stores/productStore";
import { Link } from "react-router-dom";

export const BreadCrumbs = () => {
  const currentProduct = useProductStore((state) => state.initItems);
  return (
    <div>
      <div className="text-sm lg:text-lg md:text-base breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to={`/${currentProduct!.category}`}>
              {currentProduct!.category}
            </Link>
          </li>
          <li className="truncate">{currentProduct!.name}</li>
        </ul>
      </div>
    </div>
  );
};
