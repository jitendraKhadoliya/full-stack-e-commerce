import { useEffect, useState } from "react";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Cart from "../Cart/Cart";
import Search from "./Search/Search.jsx";

import "./Header.scss";

const Header = () => {
  // here i will add class on scroll and make header sticky
  const [scrolled, setScrolled] = useState(false);
  // i will set this showCart on header icon show i can open the cart
  const [showCart ,setShowCart] = useState(false);
  // i will add state for open and close search button using this state
  const [showSearch,setShowSearch] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center">ZenBazaar</div>
          <div className="right">
              {/* here it will trigger the search button using state to open it */}
            <TbSearch onClick={()=>setShowSearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon">
              {/* here it will trigger the cart and open it */}
              <CgShoppingCart onClick={()=>setShowCart(true)} />
              <span>5</span>
            </span>
          </div>
        </div>
      </header>
      {/* i am passing this setShowCart state as an prop, because i also need to close the cart and close button is on cart component */}
      {showCart &&  <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
