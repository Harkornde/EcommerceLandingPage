import React from "react";
import ImageSlider from "./ImageSlider";

const ProductPage = () => {
  const price = 250;
  const discount = 0.5;
  const discountedprice = price * discount;

  return (
    <div className="mt-6 md:mt-22.5">
      <div className="md:flex md:w-[1110px] md:m-auto md:justify-around">
        {/* Product image page */}
        <ImageSlider />

        {/* Product details page */}
        <div className="md:w-[445px] md:mt-[62px]">
          <div className="mt-6 mx-6">
            <h className="text-[#FF7E1B] font-bold text-[14px] tracking-[1.85px]">
              SNEAKER COMPANY
            </h>
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
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
