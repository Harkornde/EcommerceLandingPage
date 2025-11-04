import Header from "./Header";
import ProductPage from "./Product_Page/ProductPage";

export default function App() {
  return (
    <>
      <div>
        <Header />
        <hr className="hidden md:block m-auto border-0 h-px bg-[#E4E9F2] mt-[34px] md:w-[1110px]" />
        <ProductPage />
      </div>
    </>
  );
}
//[hsl(219, 35%, 92%)]
// height: 2px;
// color: grey;
// background-color: green;
// border-width: 0;
