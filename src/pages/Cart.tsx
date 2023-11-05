import { ProductTable } from "@/components/ProductTable";

export const Cart = () => {
  return (
    <div className="container py-10 ">
      {/* product table */}
      <div className="py-5">
        <ProductTable />
      </div>
      {/* cart totals */}
      <div className="grid gap-40 py-10 my-5 sm:grid-cols-2">
        {/* total */}
        <div>
          <h1 className="text-3xl font-bold">Cart Totals</h1>
          <p className="flex justify-between py-4 text-2xl text-gray-500 border-b border-gray-500">
            <span>Subtotal</span>
            <span>$164</span>
          </p>
          <p className="flex justify-between py-4 text-2xl text-gray-500 border-b border-gray-500">
            <span>Shipping Fees</span>
            <span>Free</span>
          </p>
          <p className="flex justify-between py-4 text-2xl font-medium ">
            <span>Total</span>
            <span>$164</span>
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
