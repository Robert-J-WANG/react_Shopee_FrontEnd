import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";

const initState = {
  initItems: {} as TProductItem,
  selectedSize: "",
  sizeOptions: [{ id: 1, size: "S" }],
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
  // const { id, name, category, image, new_price, old_price } = currentProduct;
  useProductStore.setState((state) => {
    // const { initItems } = state;
    state.initItems = {
      ...currentProduct,
      tags: "sfd",
      desc: "asdfasdfasd",
      size: state.selectedSize,
    };
  });
};
