import "./SingleProduct.scss";
import {
  FaCartPlus,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaQuora,
  FaTwitter,
} from "react-icons/fa";

import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";
import { useState, useContext } from "react";
import { CreatedContext } from "../../utils/Context";

const SingleProduct = () => {
  // * this is for changing cart data

  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const { handleAddToCart } = useContext(CreatedContext);

  const increment = () => {
    setQuantity((previousValue) => previousValue + 1);
  };

  const decrement = () => {
    setQuantity((previousValue) => {
      if (previousValue === 1) return 1;
      else {
        return previousValue - 1;
      }
    });
  };

  if (!data) return;
  // console.log("this is data ", data);
  const product = data.data[0].attributes;
  // console.log("products", product);

  return (
    <div className="single-product-main-container">
      <div className="layout">
        <div className="single-product-page">
          {/* in the left section i will show product image */}
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                product.img.data[0].attributes.url
              }
              alt="singleProductImage"
            />
          </div>
          {/* on the right side i will show product details */}
          <div className="right">
            <span className="name">{product.name}</span>
            <span className="price"> &#8377; {product.price}</span>
            <span className="description">{product.desc}</span>

            {/* here i will add cart button */}
            <div className="cart-button">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              {/* // ! add cart functionality */}

              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data.data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                Add to Cart
              </button>
            </div>
            {/* here i will create divider */}
            <span className="divider" />
            <div className="info-item">
              {/* 1 */}
              <span className="text-bold">
                Category :
                <span>{product.categories.data[0].attributes.title}</span>
              </span>
              {/* 2 */}
              <span className="text-bold">
                Share :
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterestP size={16} />
                  <FaQuora size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
