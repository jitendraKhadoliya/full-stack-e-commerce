import "./Products.scss";
import Product from "./Product/Product.jsx";

const Products = ({innerPage}) => {
  return (
    <div className="product-container">
      {!innerPage && <div className="section-heading">Section Heading</div>}
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
