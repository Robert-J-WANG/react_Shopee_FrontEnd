import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { navMenuData } from "@/assets/navMenu_data";

const initState = {
  navMenuItems: [] as TNavMenu[],
  active: "Shop",
};

export const useNavMenuStore = create<typeof initState>()(
  immer(
    devtools(
      subscribeWithSelector(
        persist(() => initState, {
          name: "navMenu state",
        })
      ),
      {
        name: "cnavMenu state",
      }
    )
  )
);

export const setNavMenu = () => {
  useNavMenuStore.setState((state) => {
    state.navMenuItems = navMenuData;
  });
};

export const toggleNavMenu = (selectedNav: string) => {
  useNavMenuStore.setState((state) => {
    state.active = selectedNav;
  });
};
