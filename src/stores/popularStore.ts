import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import popular_women from "@/assets/popular_women";

const initState = {
  initItems: [] as TItem[],
};

export const usePopularStore = create<typeof initState>()(
  immer(
    devtools(
      subscribeWithSelector(
        persist(() => initState, {
          name: "Popular state",
        })
      ),
      {
        name: "Popular state",
      }
    )
  )
);

export const setInitData = () => {
  usePopularStore.setState((state) => {
    state.initItems = popular_women;
  });
};
