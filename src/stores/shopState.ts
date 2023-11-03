import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import all_product from "@/assets/all_product";

const initState = {
  initItems: [] as TShopItem[],
};

export const useShopStore = create<typeof initState>()(
  immer(
    devtools(
      subscribeWithSelector(
        persist(() => initState, {
          name: "Shop state",
        })
      ),
      {
        name: "Shop state",
      }
    )
  )
);

export const setInitData = () => {
  useShopStore.setState((state) => {
    state.initItems = all_product;
  });
};
