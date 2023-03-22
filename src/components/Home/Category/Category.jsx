import "./Category.scss";
import { useNavigate } from "react-router-dom";

// * it will trigger the function and scroll it
export const handleClickScrollToCategorySection = () => {
  const element = document.getElementById("category");
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    // element.scrollY({
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }
};

const Category = ({ categories }) => {
  // here i will navigate the page using it's id
  const navigate = useNavigate();

  return (
    <div className="shop-by-category" id="category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`category/${item.id}`)}
          >
            {/* no need for it now */}
            {/* process.env.REACT_APP_DEV_URL + */}
            <img
              src={item.attributes.img.data.attributes.url}
              alt="category-product"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
