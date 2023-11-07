import { useEffect } from "react";
import { Link } from "react-router-dom";
import cart_icon from "@/assets/cart_icon.png";
import logo from "@/assets/logo.png";
import { setNavMenu, toggleNavMenu, useNavMenuStore } from "@/stores/navStore";
import { useCartStore } from "@/stores/cartStore";

export const Navbar = () => {
  const navMenuItems = useNavMenuStore((state) => state.navMenuItems);
  const active = useNavMenuStore((state) => state.active);
  const totalCount = useCartStore((state) => state.totalCount);

  useEffect(() => {
    setNavMenu();
  }, []);

  return (
    <div className="bg-gray-100 shadow-3xl">
      <div className="container h-[90px] flex items-center justify-around  p-4">
        <div className="gap-4 text-4xl font-black cursor-pointer flex-center-between text-textColor">
          <img src={logo} alt="/" />
          <p className="hidden text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-textColor md:block ">
            SHOPPIA
          </p>
        </div>
        {/* nav-menu */}
        <ul className="gap-4 font-bold text-gray-600 cursor-pointer sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl flex-center-between">
          {navMenuItems.map((navItem) => (
            <Link to={navItem.link} key={navItem.id}>
              <li onClick={() => toggleNavMenu(navItem.title)}>
                {navItem.title}
                <hr
                  className={`h-1 mt-1 bg-red-500 rounded-sm ${
                    navItem.title === active ? "" : "invisible"
                  }`}
                />
              </li>
            </Link>
          ))}
        </ul>

        <div className="gap-2 md:gap-4 lg:gap-6 xl:gap-8 flex-center-between">
          {/* login-button */}
          <Link to="/react_Shoppia/loginSignup">
            <button className="w-16 rounded-full md:w-20 lg:w-28 xl:w-36 md:text-lg lg:text-xl xl:text-2xl btn btn-outline">
              Login
            </button>
          </Link>

          {/* cart */}
          <Link to="/react_Shoppia/cart">
            <img
              src={cart_icon}
              alt="/"
              className="w-3/6 cursor-pointer md:w-4/6 lg:w-5/6 xl:w-full"
            />
          </Link>

          <span className="flex items-center justify-center w-6 h-6 text-sm text-white bg-red-500 rounded-lg -ml-9 -mt-9 ">
            {totalCount}
          </span>
        </div>
      </div>
    </div>
  );
};
