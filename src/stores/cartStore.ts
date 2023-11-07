import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { nanoid } from "nanoid";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { useProductStore } from "./productStore";

const initState = {
  initItems: [] as TCartItem[],
  isSelected: false,
  totalCount: 0,
  totalPrice: 0,
  isOrdered: false,
  shipFees: 0,
};

export const useCartStore = create<typeof initState>()(
  immer(
    devtools(
      subscribeWithSelector(
        persist(() => initState, {
          name: "cart state",
        })
      ),
      {
        name: "cart state",
      }
    )
  )
);

export const addToCart = (selectedItem: TProductItem) => {
  const selectedSize = useProductStore.getState().selectedSize;
  if (selectedSize === "") {
    alert("Please select a size");
    return;
  }
  useCartStore.setState((state) => {
    const itemIndex = state.initItems.findIndex(
      (item) => item.data_id === selectedItem.id && item.size === selectedSize
    );
    if (itemIndex !== -1) {
      state.initItems[itemIndex].count++;
    } else {
      const updatedItem: TCartItem = {
        id: nanoid(),
        data_id: selectedItem.id,
        image: selectedItem.image,
        name: selectedItem.name,
        count: 1,
        price: selectedItem.new_price,
        size: selectedSize,
      };
      state.initItems.push(updatedItem);
    }
    state.totalCount = updateTotalCount(state.initItems);
    state.totalPrice = updateTotalPrice(state.initItems);
    state.isOrdered = true;
    closeMessage();
  });
};

export const increaseItem = (id: string) => {
  useCartStore.setState((state) => {
    state.initItems.find((item) => item.id === id)!.count += 1;
    state.totalCount = updateTotalCount(state.initItems);
    state.totalPrice = updateTotalPrice(state.initItems);
  });
};

export const decreaseItem = (id: string) => {
  useCartStore.setState((state) => {
    const itemToDecrease = state.initItems.find((item) => item.id === id);

    if (itemToDecrease!.count > 0) {
      itemToDecrease!.count -= 1;
    }
    state.totalCount = updateTotalCount(state.initItems);
    state.totalPrice = updateTotalPrice(state.initItems);
  });
};

export const removeItem = (id: string) => {
  useCartStore.setState((state) => {
    state.initItems = state.initItems.filter((item) => item.id !== id);
    state.totalCount = updateTotalCount(state.initItems);
    state.totalPrice = updateTotalPrice(state.initItems);
    // 删掉所有的item时，关闭购物车
    // state.isOpen = state.cartItems.length === 0 ? false : true;
  });
};

export const closeMessage = () => {
  setTimeout(() => {
    useCartStore.setState((state) => {
      state.isOrdered = false;
    });
  }, 1500);
};

const updateTotalCount = (cartItems: TCartItem[]) => {
  return cartItems.reduce((prevCount, item) => prevCount + item.count, 0);
};
const updateTotalPrice = (cartItems: TCartItem[]) => {
  return cartItems.reduce(
    (prevPrice, item) => prevPrice + item.count * item.price,
    0
  );
};
