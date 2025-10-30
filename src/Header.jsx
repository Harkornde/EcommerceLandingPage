export default function Header() {
  return (
    <>
      <div>
        <header className="flex md:w-[1110px] md:h-[50px] mt-[19px] md:mt-7 items-center justify-around md:justify-between m-auto">
          {/* Logo and list container */}
          <div className="flex items-end md:items-center gap-4 md:gap-[59px]">
            {/* Working with the modal */}
            <div className="md:hidden" onClick={() => console.log("clicked")}>
              <img src="images/icon-menu.svg" />
            </div>

            {/* Logo bar */}
            <div>
              <img src="/images/logo.svg" />
            </div>

            {/* Collections */}
            <div className="hidden md:block">
              <ul className="flex gap-[33px] text-[#69707D] font-semiboldl">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
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
