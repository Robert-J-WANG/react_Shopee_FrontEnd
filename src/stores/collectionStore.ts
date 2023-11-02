import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { new_collections } from "@/assets/new_collections";

const initState = {
  initItems: [] as TItem[],
};

export const useCollectionStore = create<typeof initState>()(
  immer(
    devtools(
      subscribeWithSelector(
        persist(() => initState, {
          name: "Collection state",
        })
      ),
      {
        name: "Collection state",
      }
    )
  )
);

export const setInitData = () => {
  useCollectionStore.setState((state) => {
    state.initItems = new_collections;
  });
};
