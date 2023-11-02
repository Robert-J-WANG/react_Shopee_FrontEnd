import { Item } from "./Item";

export const Popular = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-20 ">
      {/* title */}
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl font-bold">POPULAR IN WOMEN</h1>
        <progress className="w-56 progress"></progress>
      </div>
      {/* item list */}
      <div className="flex justify-between gap-10 my-10">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};
