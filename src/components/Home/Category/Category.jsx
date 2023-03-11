import "./Category.scss";
import {useNavigate} from "react-router-dom";

const Category = ({categories}) => {
  // here i will nevigate the page using it's id
  const nevigate = useNavigate();
    return (
    <div className="shop-by-category">
      <div className="categories">

        {categories?.data?.map((item)=>(
          <div key={item.id} className="category" onClick={()=>nevigate(`category/${item.id}`)} >
              <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="category-product" />
          </div>
        ))}

      </div>
    </div>
  );
};

export default Category;
