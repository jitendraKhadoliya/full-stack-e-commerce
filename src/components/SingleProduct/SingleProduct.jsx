import "./SingleProduct.scss";
import {FaCartPlus, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaQuora, FaTwitter} from 'react-icons/fa'
import singleProductImage from '../../assets/products/headphone-prod-2.webp'
import RelatedProducts from "./RelatedProducts/RelatedProducts";

const SingleProduct = () => {
    return (
        <div className="single-product-main-container">
            <div className="layout">
                <div className="single-product-page">
                    {/* in the left section i will show product image */}
                    <div className="left"><img src={singleProductImage} alt="singleProductImage" /></div>
                    {/* on the right side i will show product details */}
                    <div className="right">
                        <span className="name">Product Name</span>
                        <span className="price">Price</span>
                        <span className="description">Description</span>

                        {/* here i will add cart button */}
                        <div className="cart-button">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>7</span>
                                <span>+</span>
                            </div>
                            <button className="add-to-cart-button"> 
                                <FaCartPlus size={20}/>
                                Add to Cart</button>
                        </div>
                        {/* here i will create divider */}
                        <span className="divider"/>
                        <div className="info-item">
                            {/* 1 */}
                            <span className="text-bold">
                                Category :
                                <span>Headphones</span>
                            </span>
                            {/* 2 */}
                            <span className="text-bold">
                                Share :
                                <span className="social-icons">
                                    <FaFacebookF size={16}/>
                                    <FaTwitter size={16}/>
                                    <FaInstagram size={16}/>
                                    <FaLinkedinIn size={16}/>
                                    <FaPinterestP size={16}/>
                                    <FaQuora size={16}/>
                                    
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts />
            </div>
        </div>
    );
};

export default SingleProduct;
