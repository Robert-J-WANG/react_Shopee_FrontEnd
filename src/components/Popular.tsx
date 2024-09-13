import { useEffect } from "react";
import { Item } from "./Item";
import { setInitData, usePopularStore } from "@/stores/popularStore";
import Title from "@/widgets/Title.js";

export const Popular = () => {
  const initItems = usePopularStore((state) => state.initItems);
  useEffect(() => {
    setInitData();
  }, []);
  return (
    <div className="container flex flex-col items-center justify-center gap-10 py-20 2xl:max-w-[1280px] ">
      {/* title */}
      <Title> POPULAR IN WOMENS</Title>
      {/* item list */}
      <div className="grid justify-center gap-10 mb-10 md:grid-cols-2 xl:grid-cols-3 place-content-center place-items-center ">
        {initItems!.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
