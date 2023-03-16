import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem.jsx";
import { useContext } from "react";
import { CreatedContext } from "../../utils/Context";

const Cart = ({ setShowCart }) => {
  let { cartSubTotal } = useContext(CreatedContext);
  return (
    <div className="cart-panel">
      <div className="opacity-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>

        {cartSubTotal === 0 ? (
          <>
            {/* here I am going to add empty cart */}
            <div className="empty-card">
              <BsCartX />
              <span>No Product In The Cart.</span>
              <button className="return-cta" onClick={() => setShowCart(false)}>
                {" "}
                RETURN TO SHOP
              </button>
            </div>
          </>
        ) : (
          // * this is the case when products has been added into the cart
          <>
            {/* here i will make cart Footer here */}
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">SubTotal:</span>
                <span className="total">&#8377;{cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta">Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
