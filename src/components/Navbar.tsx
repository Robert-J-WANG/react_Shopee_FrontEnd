import React, { useEffect } from "react";
import cart_icon from "@/assets/cart_icon.png";
import logo from "@/assets/logo.png";
import { setNavMenu, toggleNavMenu, useNavMenuStore } from "@/stores/navStore";

export const Navbar = () => {
  const navMenuItems = useNavMenuStore((state) => state.navMenuItems);
  const active = useNavMenuStore((state) => state.active);

  useEffect(() => {
    setNavMenu();
  }, []);

  return (
    <div className="flex items-center justify-around p-4 shadow-3xl ">
      {/* logo */}
      <div className="gap-4 text-4xl font-black cursor-pointer flex-center-between text-textColor">
        <img src={logo} alt="/" />
        <p>SHOPEE</p>
      </div>
      {/* nav-menu */}
      <ul className="gap-12 text-3xl font-bold text-gray-600 cursor-pointer flex-center-between">
        {navMenuItems.map((navItem) => (
          <li key={navItem.id} onClick={() => toggleNavMenu(navItem.title)}>
            <span>{navItem.title}</span>{" "}
            <hr
              className={`h-1 mt-1 bg-red-500 rounded-sm ${
                navItem.title === active ? "" : "invisible"
              }`}
            />
          </li>
        ))}
      </ul>
      {/* login-button */}
      <div className="gap-6 flex-center-between">
        <button className="w-40 text-2xl rounded-full btn btn-outline ">
          Login
        </button>
        <img src={cart_icon} alt="/" className="cursor-pointer" />
        <span className="flex items-center justify-center w-6 h-6 text-sm text-white bg-red-500 rounded-lg -ml-9 -mt-9 ">
          0
        </span>
      </div>
    </div>
  );
};
