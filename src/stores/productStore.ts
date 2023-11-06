import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";

const initState = {
  initItems: {} as TProductItem,
  selectedSize: "",
  sizeOptions: [
    { id: 1, size: "S" },
    { id: 2, size: "M" },
    { id: 3, size: "L" },
    { id: 4, size: "XL" },
    { id: 5, size: "XXL" },
  ],
  tabActive: "",
};

export const useProductStore = create<typeof initState>()(
  immer(
    devtools(
      subscribeWithSelector(
        persist(() => initState, {
          name: "currentProduct state",
        })
      ),
      {
        name: "currentProduct state",
      }
    )
  )
);

export const setcurrentProduct = (currentProduct: TShopItem) => {
  useProductStore.setState((state) => {
    state.initItems = {
      ...currentProduct,
      tags: "sfd",
      desc: "asdfasdfasd",
      size: state.selectedSize,
    };
  });
};
export const activeTabs = (e: React.MouseEvent) => {
  const target = e.target as HTMLAnchorElement;

  target.parentNode
    ?.querySelectorAll("a")
    .forEach((a) => a.classList.remove("tab-active"));
  target.classList.add("tab-active");

  useProductStore.setState((state) => {
    state.tabActive = target.innerText;
  });
};

export const selectSize = (size: string) => {
  useProductStore.setState((state) => {
    state.selectedSize = size;
  });
};
