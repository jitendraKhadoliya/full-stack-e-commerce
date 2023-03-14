import prod from "../../../assets/products/speaker-prod-1.webp";
import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import { useContext } from "react";
import { CreatedContext } from "../../../utils/Context";

const CartItem = () => {
  const { CartItems, handleAddToCart, handleRemoveFromCart } =
    useContext(CreatedContext);

  return (
    <div className="cart-products">
      {CartItems.map((item) => (
        <div key={item.id} className="cart-product">
          <div className="img-container">
            <img src={prod} alt="cart-product" />
          </div>
          <div className="prod-details">
            <span className="name">{item.attributes.title}</span>
            <MdClose className="close-btn" />
            <div className="quantity-buttons">
              <span>-</span>
              <span>10</span>
              <span>+</span>
            </div>
            <div className="text">
              <span>3</span>
              <span>x</span>
              <span className="highlight">&#8377; {item.attributes.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
