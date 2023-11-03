import { BreadCrumbs } from "@/components/BreadCrumbs";
import { ProductDisplay } from "@/components/ProductDisplay";
import { setcurrentProduct } from "@/stores/productStore";
import { useShopStore } from "@/stores/shopState";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
  const { productId } = useParams();
  const currentProduct = useShopStore((state) => state.initItems)!.find(
    (item) => item.id === parseInt(productId!)
  );

  useEffect(() => {
    setcurrentProduct(currentProduct!);
  }, []);
  return (
    <div>
      <div className="container py-10 ">
        {/* breadcrumbs */}
        <BreadCrumbs />
        {/* product details */}
        <ProductDisplay />
      </div>
    </div>
  );
};
