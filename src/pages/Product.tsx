import { BreadCrumbs } from "@/components/BreadCrumbs";
import { Description } from "@/components/Description";
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
      <div className="container py-10 2xl:max-w-[1280px]">
        {/* breadcrumbs */}
        <BreadCrumbs />
        {/* product details */}
        <ProductDisplay />
        <Description />
      </div>
    </div>
  );
};
