import { ProductTable } from "@/components/ProductTable";
import { useCartStore } from "@/stores/cartStore";
import { formatCurrency } from "@/utils/formatCurrency";

export const Cart = () => {
  const initItems = useCartStore((state) => state.initItems);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const shipFees = useCartStore((state) => state.shipFees);
  return (
    <div className="container py-10 ">
      {/* product table */}
      <div className="py-5">
        {initItems.length > 0 ? (
          <ProductTable />
        ) : (
          <p className="text-2xl text-red-500">Your cart is empty!</p>
        )}
      </div>
      {/* cart totals */}
      <div className="grid gap-40 py-10 my-5 sm:grid-cols-2">
        {/* total */}
        <div>
          <h1 className="text-3xl font-bold">Cart Totals</h1>
          <p className="flex justify-between py-4 text-2xl text-gray-500 border-b border-gray-500">
            <span>Subtotal</span>
            <span>{formatCurrency(totalPrice)}</span>
          </p>
          <p className="flex justify-between py-4 text-2xl text-gray-500 border-b border-gray-500">
            <span>Shipping Fees</span>
            <span>{shipFees === 0 ? "Free" : shipFees}</span>
          </p>
          <p className="flex justify-between py-4 text-2xl font-medium ">
            <span>Total</span>
            <span>{formatCurrency(totalPrice + shipFees)}</span>
          </p>
          <button className="my-4 text-xl text-white btn btn-error">
            proceed to checkout
          </button>
        </div>
        {/* promo code */}
        <div className="py-5 text-2xl">
          <p className="my-5 text-gray-500">
            If you have a promo code, Enter it here
          </p>

          <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="promo code"
            />
            <button className="rounded-r-full btn-accent btn join-item">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
