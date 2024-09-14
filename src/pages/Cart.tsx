import { ProductTable } from "@/components/ProductTable";
import { useCartStore } from "@/stores/cartStore";
import { formatCurrency } from "@/utils/formatCurrency";

export const Cart = () => {
  const initItems = useCartStore((state) => state.initItems);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const shipFees = useCartStore((state) => state.shipFees);
  return (
    <div className="container flex flex-col justify-between gap-10 max-w-[1280px]">
      {/* product table */}
      <div className="py-5">
        {initItems.length > 0 ? (
          <ProductTable />
        ) : (
          <p className="text-2xl text-red-500">Your cart is empty!</p>
        )}
      </div>
      {/* cart totals */}

      {/* total */}
      <div>
        <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">
          Cart Totals
        </h1>
        <p className="flex justify-between py-4 text-lg text-gray-500 border-b border-gray-500 md:text-xl lg:text-2xl">
          <span>Subtotal</span>
          <span>{formatCurrency(totalPrice)}</span>
        </p>
        <p className="flex justify-between py-4 text-lg text-gray-500 border-b border-gray-500 md:text-xl lg:text-2xl">
          <span>Shipping Fees</span>
          <span>{shipFees === 0 ? "Free" : shipFees}</span>
        </p>
        <p className="flex justify-between py-4 text-lg font-medium md:text-xl lg:text-2xl ">
          <span>Total</span>
          <span>{formatCurrency(totalPrice + shipFees)}</span>
        </p>
        <button className="my-4 text-white md:text-lg lg:text-xl btn btn-error">
          proceed to checkout
        </button>
      </div>
    </div>
  );
};
