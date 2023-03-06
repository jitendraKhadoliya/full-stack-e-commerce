import prod from "../../../assets/products/speaker-prod-1.webp";
import { MdClose } from "react-icons/md";
import "./CartItem.scss";

const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
            <img src={prod} alt="cart-product" />
        </div>
        <div className="prod-details">
            <span className="name">name</span>
            <MdClose className="close-btn"/>
            <div className="quantity-buttons">
                <span>-</span>
                <span>10</span>
                <span>+</span>
            </div>
            <div className="text">
                <span>3</span>
                <span>x</span>
                <span className="highlight">&#8377; 3541</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
