import "./Products.scss";
import Product from "./Product/Product.jsx";

const Products = ({innerPage , headingText,products}) => {
  return (
    <div className="product-container">
      {!innerPage && <div className="section-heading">{headingText}</div>}
      <div className="products">
        {/* here i will fetch the data of all products */}
        {products?.data?.map((item)=>(
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Products;
