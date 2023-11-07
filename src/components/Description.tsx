import { activeTabs, useProductStore } from "@/stores/productStore";

export const Description = () => {
  const tabActive = useProductStore((state) => state.tabActive);
  return (
    <div className="lg:text-xl ">
      {/* tabs */}
      <div className="mt-10 tabs" onClick={(event) => activeTabs(event)}>
        <a className="text-xl border border-gray-400 tab tab-lifted tab-active">
          Description
        </a>
        <a className="text-xl border border-gray-400 tab tab-lifted">
          Reviews(122)
        </a>
      </div>
      {/* content */}
      <div className="border border-gray-400 p-7 ">
        {tabActive === "Description" ? <p>Description</p> : <p>Reviews</p>}
      </div>
    </div>
  );
};
