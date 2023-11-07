import dropdown_icon from "@/assets/dropdown_icon.png";
import { Item } from "@/components/Item";
import { setInitData, useShopStore } from "@/stores/shopState";
import { useEffect } from "react";

type Tprops = {
  category: string;
  banner: string;
};

export const ShopCategory = (props: Tprops) => {
  console.log(props.category);
  const initItems = useShopStore((state) => state.initItems);
  const shopItems = initItems!.filter(
    (item) => item.category === props.category
  );
  console.log(shopItems);

  useEffect(() => {
    setInitData();
  }, []);
  return (
    <div className="container py-10">
      {/* banner image */}
      <img src={props.banner} alt="/" />
      {/* dropdown */}
      <div className="py-5 text-sm md:text-base lg:text-lg navbar rounded-box">
        <div className="flex-1 gap-2 px-2 lg:flex-none">
          <span className="font-bold">Showing 1-12 </span>
          {"  "}
          <span>out of {shopItems.length} products</span>
        </div>
        <div className="flex justify-end flex-1 px-2">
          <div className="flex items-stretch">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost rounded-btn">
                Sort by <img src={dropdown_icon} alt="" />
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* products list */}
      <ul className="grid justify-center gap-10 mb-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-content-center place-items-center ">
        {shopItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>

      {/* explore more button */}
      <div className="flex items-center justify-center py-10">
        <button className="text-lg rounded-full btn btn-outline ">
          Explore more
        </button>
      </div>
    </div>
  );
};
