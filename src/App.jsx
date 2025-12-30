import { useState } from "react";
import Header from "./Header";
import ProductPage from "./Product_Page/ProductPage";

export default function App() {
  const [items, setNumberOfItems] = useState(0);
  const [numItems, setNumItems] = useState(0);

  const price = 250;
  const discount = 0.5;
  const discountedprice = price * discount;

  console.log(numItems);

  return (
    <>
      <div>
        {/* Header */}
        <Header setNumItems={setNumItems} numItems={numItems} discountedprice={discountedprice}/>

        <hr className="hidden md:block m-auto border-0 h-px bg-[#E4E9F2] mt-[34px] md:w-[1110px]" />

        {/* Product Page */}
        <ProductPage
          price={price}
          discountedprice={discountedprice}
          items={items}
          setNumberOfItems={setNumberOfItems}
          setNumItems={setNumItems}
        />
      </div>
    </>
  );
}
