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
      <div className="container h-[90px] flex items-center justify-between px-2">
        {/* logo */}
        <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-md cursor-pointer md:w-16 md:h-16">
          <img className="w-full h-full " src={logo} alt="/" />
        </div>
        {/* nav-menu */}
        <ul className="gap-2 font-bold text-gray-600 cursor-pointer sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl flex-center-between">
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

        {/* left */}
        <div className="gap-2 md:gap-4 lg:gap-6 xl:gap-8 flex-center-between">
          {/* login-button */}
          <Link to="/react_Shoppia/loginSignup">
            <p className="px-3 py-1 border md:text-lg border-subBdColor rounded-xl">
              Login
            </p>
          </Link>

          {/* cart */}
          <Link to="/react_Shoppia/cart">
            <img
              src={cart_icon}
              alt="/"
              className="w-3/6 cursor-pointer md:w-4/6 lg:w-5/6 xl:w-full"
            />
          </Link>
          <span className="flex items-center justify-center w-3 h-3 text-sm text-white bg-red-500 rounded-lg md:w-6 md:h-6 -ml-9 -mt-9 ">
            {totalCount}
          </span>
        </div>
      </div>
    </div>
  );
};
