import "./Product.scss";
import { useNavigate } from "react-router-dom";

const Product = ({ id, data }) => {
  const navigate = useNavigate();
  // console.log(data);

  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        {/* process.env.REACT_APP_DEV_URL + */}
        {/* I am removing that local url stuff because now i don't need it because it saved on cloud now  */}
        <img src={data.img.data[0].attributes.url} alt="product" />
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="price"> &#8377; {data.price}</span>
      </div>
    </div>
  );
};

export default Product;
