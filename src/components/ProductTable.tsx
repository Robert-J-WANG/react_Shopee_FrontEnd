import { decreaseItem, increaseItem, useCartStore } from "@/stores/cartStore";
import { formatCurrency } from "@/utils/formatCurrency";
import { CiSquareRemove } from "react-icons/ci";
import { removeItem } from "../stores/cartStore";
export const ProductTable = () => {
  const cartItems = useCartStore((state) => state.initItems);
  return (
    <div className="overflow-x-auto">
      <table className="table text-sm lg:text-xl md:text-lg sm:text-base">
        {/* head */}
        <thead>
          <tr className="text-sm lg:text-xl md:text-lg sm:text-base">
            <th>Products</th>
            <th>Title</th>
            <th>Size</th>
            <th>Price</th>
            <th>Quanity</th>
            <th className="hidden md:block">Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => (
            <tr key={cartItem.id}>
              <td>
                <div className="flex items-center">
                  <div className="avatar">
                    <div className="w-14 mask mask-squircle">
                      <img src={cartItem.image} alt="/" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{cartItem.name}</td>
              <td>{cartItem.size}</td>
              <td>{formatCurrency(cartItem.price)}</td>
              <td>
                <div>
                  <button
                    className="text-2xl btn"
                    onClick={() => increaseItem(cartItem.id)}
                  >
                    +
                  </button>
                  <span className="mx-5">{cartItem.count}</span>
                  <button
                    className="text-2xl btn"
                    onClick={() => decreaseItem(cartItem.id)}
                  >
                    -
                  </button>
                </div>
              </td>
              <td className="hidden md:block">
                {formatCurrency(cartItem.price * cartItem.count)}
              </td>
              <td>
                <CiSquareRemove
                  size={40}
                  onClick={() => removeItem(cartItem.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
