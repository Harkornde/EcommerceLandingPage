export default function Header() {
  return (
    <>
      <div>
        <header className="flex">
          {/* Logo bar */}
          <div>
            <img src="/images/logo.svg" />
          </div>

          {/* Collections */}
          <div>
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Cart and Profile */}
          <div></div>
        </header>
      </div>
    </>
  );
}
