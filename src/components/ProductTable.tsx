import procuct_1 from "@/assets/product_1.png";
import { CiSquareRemove } from "react-icons/ci";
export const ProductTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table text-xl">
        {/* head */}
        <thead>
          <tr className="text-xl">
            <th>Products</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quanity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="w-14 mask mask-squircle">
                    <img src={procuct_1} alt="/" />
                  </div>
                </div>
              </div>
            </td>
            <td>Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket</td>
            <td>99</td>
            <td>
              <div>
                <button className="text-2xl btn">+</button>
                <span className="mx-5">5</span>
                <button className="text-2xl btn">-</button>
              </div>
            </td>
            <td>1</td>
            <td>
              <CiSquareRemove size={40} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
