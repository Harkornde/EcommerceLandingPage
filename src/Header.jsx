import { useState } from "react";
import NavMenu from "./NavMenu/navMenu";

export default function Header() {
  const [toggle, turnToglle] = useState(false);

  return (
    <>
      <div>
        <header className="flex md:w-[1110px] md:h-[50px] mt-[19px] md:mt-7 items-baseline md:items-center justify-around md:justify-between m-auto">
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
              toggle ? "opacity-75" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => turnToglle(false)}
          ></div>

          {/* Logo and list container */}
          <div className="flex items-baseline gap-4 md:gap-[59px]">
            {/* Working with the modal */}
            <div className="md:hidden">
              <button
                onClick={() => {
                  turnToglle(!toggle);
                  console.log(toggle);
                }}
              >
                <img src="images/icon-menu.svg" />
              </button>
            </div>

            {/* Logo bar */}
            <div>
              <img src="/images/logo.svg" />
            </div>

            {/* Collections */}

            {/* Mobile Nav */}
            <div
              className={`absolute top-0 left-0 w-[250px] min-h-screen font-bold text-lg bg-[#FFFFFF] z-50  transition-transform duration-300 ease-in-out ${
                toggle ? "translate-x-0" : "-translate-x-full"
              } ${toggle ? "visible" : "invisible"} `}
            >
              <button
                onClick={() => {
                  turnToglle(!toggle);
                }}
              >
                <img
                  src="/images/icon-close.svg"
                  className="w-3.5 h-3.5 mt-7 ml-[25px]"
                />
              </button>
              <ul className="flex gap-5 mt-[54px] ml-[25px] flex-col text-[#1D2026] font-semibold">
                {NavMenu.map((navmenu) => (
                  <li>{navmenu.Collections}</li>
                ))}
              </ul>
            </div>
            {/* Desktop nav */}
            <div className="hidden md:block">
              <ul className="flex gap-[33px] text-[#69707D] font-semibold ">
                {NavMenu.map((navmenu) => (
                  <li className="cursor-pointer">{navmenu.Collections}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cart and Profile */}
          <div className="flex gap-[22px] md:gap-[46px] items-center">
            <div>
              <img src="images/icon-cart.svg" className="w-[22px] h-5" />
            </div>
            <div>
              <img src="images/image-avatar.png" className="w-6 md:w-[50px]" />
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
