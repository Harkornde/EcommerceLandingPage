import { useState } from "react";
import NavMenu from "./NavMenu/navMenu";
import { FaTrashAlt } from "react-icons/fa";

export default function Header({ numItems, discountedprice }) {
  const [toggle, turnToglle] = useState(false);
  const [cart, checkCart] = useState(false);

  // const totalPrice =

  return (
    <>
      <div>
        <header className="relative flex md:w-[1110px] md:h-[50px] mt-[19px] md:mt-7 items-baseline md:items-center justify-around md:justify-between m-auto">
          <div
            className={`md:hidden fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
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
              className={`md:hidden fixed top-0 left-0 w-[250px] min-h-screen font-bold text-lg bg-[#FFFFFF] z-50  transition-transform duration-300 ease-in-out ${
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
                  <li key={crypto.randomUUID()}>{navmenu.Collections}</li>
                ))}
              </ul>
            </div>
            {/* Desktop nav */}
            <div className="hidden md:block">
              <ul className="flex gap-[33px] text-[#69707D] font-semibold ">
                {NavMenu.map((navmenu) => (
                  <li key={crypto.randomUUID()} className="cursor-pointer">
                    {navmenu.Collections}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Carts Product and number  */}

          {cart && (
            <div className="absolute md:top-0 md:right-0 mt-[60px] md:-mr-25 p-6 rounded-2xl w-[calc(100%-16px)] md:w-[360px] h-64 md:h-70 z-30 bg-[#FFFFFF] shadow-2xl border border-gray-100">
              <h1 className="text-[16px] font-bold">Cart</h1>
              <hr className="border-0 h-0.5 bg-[#E4E9F2] mt-6 -mx-6" />

              {numItems === 0 ? (
                <div>
                  <h1 className="text-center mt-19">Your cart is empty.</h1>
                </div>
              ) : (
                <div>
                  <div className="mt-6 flex gap-4">
                    <img
                      className="w-[50px] h-[50px] rounded-md"
                      src="/images/image-product-1-thumbnail.jpg"
                    />
                    <div className="text-[#69707D]">
                      <p>Fall Limited Edition Sneakers</p>
                      <p>
                        {`$${discountedprice} x ${numItems}`}{" "}
                        <span className="text-[#1D2026] inline-block ml-2">
                          <strong>{`$${discountedprice * numItems}.00`}</strong>
                        </span>
                      </p>
                    </div>
                    <button className="ml-1">
                      <FaTrashAlt color="#C3CAD9" />
                    </button>
                  </div>

                  {/* Checkout button */}
                  <button className="bg-[#FF7E1B] mt-6 w-[312px] h-14 cursor-pointer rounded-xl text-[#FFFFFF] font-bold">
                    Checkout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Cart and Profile */}
          <div className="flex gap-[22px] md:gap-[46px] items-center">
            <div>
              <button
                onClick={() => {
                  checkCart((cart) => !cart);
                }}
                className="cursor-pointer"
              >
                <img src="images/icon-cart.svg" className="w-[22px] h-5" />
              </button>
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
//hidden md:block m-auto border-0 h-px bg-[#E4E9F2] mt-[34px] md:w-[1110px]
