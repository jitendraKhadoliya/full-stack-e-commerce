import { useContext, useEffect, useState } from "react";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import Cart from "../Cart/Cart";
import Search from "./Search/Search.jsx";

import { handleClickScrollToCategorySection } from "../Home/Category/Category";
import { handleClickScrollToAboutSection } from "../Footer/Newsletter/Newsletter";
import { handleClickScrollToTopSection } from "../Home/Banner/Banner";

import "./Header.scss";
import { CreatedContext } from "../../utils/Context";

const Header = () => {
  // * here i will add class on scroll and make header sticky
  const [scrolled, setScrolled] = useState(false);
  // i will set this showCart on header icon show i can open the cart
  const [showCart, setShowCart] = useState(false);
  // i will add state for open and close search button using this state
  const [showSearch, setShowSearch] = useState(false);
  // to change cart count on shopping cart icon
  const { cartCount } = useContext(CreatedContext);

  //  * creating navigate instance to navigate it to the home
  const navigate = useNavigate();
  const testMode = () => {
    handleClickScrollToTopSection();
    return navigate("/");
  };

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
            {/* <li onClick={handleClickScrollToTopSection}>Home</li> */}
            <li onClick={testMode}>Home</li>
            <li onClick={handleClickScrollToAboutSection}>About</li>
            <li onClick={handleClickScrollToCategorySection}>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            ZenBazaar
          </div>
          <div className="right">
            {/* here it will trigger the search button using state to open it */}
            <TbSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon">
              {/* here it will trigger the cart and open it */}
              <CgShoppingCart onClick={() => setShowCart(true)} />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {/* i am passing this setShowCart state as an prop, because i also need to close the cart and close button is on cart component */}
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
