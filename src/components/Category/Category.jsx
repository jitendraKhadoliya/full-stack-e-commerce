import Products from "../Products/Products.jsx";
import { useParams } from "react-router-dom";
import "./Category.scss";
import useFetch from "../../hooks/useFetch.js";

const Category = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );
  // console.log(data);
  return (
    <div className="category-main-layout">
      <div className="layout">
        <div className="category-title">
          {data?.data[0]?.attributes?.categories?.data[0]?.attributes?.title}
        </div>
        <Products innerPage={true} products={data} />
      </div>
    </div>
  );
};

export default Category;
