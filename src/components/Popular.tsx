import { useEffect } from "react";
import { Item } from "./Item";
import { setInitData, usePopularStore } from "@/stores/popularStore";

export const Popular = () => {
  const initItems = usePopularStore((state) => state.initItems);
  console.log(initItems);
  useEffect(() => {
    setInitData();
  }, []);
  return (
    <div className="container flex flex-col items-center justify-center gap-10 py-20 ">
      {/* title */}
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl font-bold">NEW COLLECTIONS</h1>
        <progress className="w-56 progress"></progress>
      </div>
      {/* item list */}
      <div className="flex flex-wrap justify-between gap-10 my-10 ">
        {initItems!.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
