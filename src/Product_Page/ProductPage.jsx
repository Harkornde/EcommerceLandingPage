// import { useState } from "react";
import ImageSlider from "./ImageSlider";
import { BsCart2 } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductPage = ({
  setNumberOfItems,
  items,
  discountedprice,
  price,
  setNumItems,
}) => {
  // const price = 250;
  // const discount = 0.5;
  // const discountedprice = price * discount;

  function increaseNumberOfItems(e) {
    e.preventDefault();
    setNumberOfItems(() => +items + 1);
  }
  function decreaseNumberOfItems(e) {
    e.preventDefault();
    if (items > 0) {
      setNumberOfItems(() => +items - 1);
    }
  }

  function addToCart(e) {
    e.preventDefault();
    setNumItems(() => items);
    setNumberOfItems(() => 0);
  }

  return (
    <div className="mt-6 md:mt-22.5">
      <div className="md:flex md:w-[1110px] md:m-auto md:justify-around">
        {/* Product image page */}
        <ImageSlider />

        {/* Product details page */}
        <div className="md:w-[445px] md:mt-4">
          <div className="mt-6 mx-6">
            <h1 className="text-[#FF7E1B] font-bold text-[14px] tracking-[1.85px]">
              SNEAKER COMPANY
            </h1>
            <h1 className="text-[28px] font-bold text-[#1D2026] mt-4 md:mt-7 md:text-[44px]">
              Fall Limited Edition Sneakers
            </h1>
            <p className="mt-3.5 text-[#69707D] text-[15px]/6 md:mt-8">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer. they'll come
            </p>
            <div className="flex mt-6 justify-between items-center md:flex-col md:items-start">
              <div>
                {/* Discounted Price */}
                <h1 className="inline-block font-bold text-[1.75rem]">
                  {`$${discountedprice}.00`}
                </h1>
                {/* Discount */}
                <h1 className="inline-block mx-4 md:ml-6 text-[#FF7E1B] font-bold text-[1rem] bg-[#FFEEE2] px-2 py-1 rounded-lg">
                  50%
                </h1>
              </div>
              {/* Original Price */}
              <div>
                <h1 className="font-bold text-[#B6BCC8] line-through">
                  {`$${price}.00`}
                </h1>
              </div>
            </div>

            {/* Product number and adding to cart */}
            <div className="">
              <div className="mt-6">
                <form className="md:flex md:gap-4">
                  <div className="relative md:w-[157px] md:h-14">
                    <button
                      onClick={decreaseNumberOfItems}
                      className="absolute top-0 bottom-0 ml-12 md:ml-4 cursor-pointer"
                    >
                      <FaMinus color="#FF7E1B" />
                    </button>

                    <input
                      onChange={(e) => setNumberOfItems(e.target.value)}
                      id="cart-number"
                      className="block md:w-[157px] h-14 w-full mb-5 m-auto bg-[#F6F8FD] rounded-xl text-[20px] font-bold text-center outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      value={+items}
                      type="number"
                      readOnly
                    />

                    <button
                      onClick={increaseNumberOfItems}
                      className="absolute top-0 bottom-0 right-0 mr-12 md:mr-4 cursor-pointer"
                    >
                      <FaPlus color="#FF7E1B" />
                    </button>
                  </div>

                  <button
                    onClick={addToCart}
                    className="w-full md:w-[272px] h-14 rounded-xl bg-[#FF7E1B] hover:bg-[#FFAB6A] transition-colors text-[16px] font-bold text-[#FFFFFF] flex items-center justify-center gap-4 cursor-pointer shadow-lg shadow-orange-200 mb-4 duration-200 ease-in-out active:scale-95 active:shadow-none"
                    type="submit"
                  >
                    <BsCart2 size={"16px"} />
                    Add to cart
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
