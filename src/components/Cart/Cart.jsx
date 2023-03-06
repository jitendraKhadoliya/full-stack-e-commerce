import {MdClose } from 'react-icons/md';
import {BsCartX } from 'react-icons/bs';
import "./Cart.scss";
import CartItem from './CartItem/CartItem.jsx';

const Cart = ({setShowCart}) => {
    return (
        <div className="cart-panel">
            <div className="opacity-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={()=>setShowCart(false)}>
                        <MdClose />
                        <span className="text">Close</span>
                    </span>
                </div>

                {/* here I am going to add empty cart */}
                {/* <div className="empty-card">
                    < BsCartX />
                    <span>No Product In The Cart.</span>
                    <button className='retun-cta'>RETURN TO SHOP</button>
                </div> */}

                <>
                <CartItem />
                {/* here i will make cart Footer here */}
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">SubTotal:</span>
                        <span className="total">&#8377;1233</span>
                    </div>
                    <div className="button">
                        <button className='checkout-cta'>Checkout</button>
                    </div>
                </div>
                </>

            </div>
        </div>
    );
};

export default Cart;
