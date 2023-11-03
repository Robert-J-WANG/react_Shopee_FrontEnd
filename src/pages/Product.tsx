import { useShopStore } from "@/stores/shopState";
import { Link, useParams } from "react-router-dom";

export const Product = () => {
  const productId = useParams().productId;
  const currentProduct = useShopStore((state) => state.initItems)!.find(
    (item) => item.id === parseInt(productId!)
  );
  return (
    <div>
      <div className="container flex py-10 ">
        {/* breadcrumbs */}
        <div className="text-lg breadcrumbs ">
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
            <li>{currentProduct!.name}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
