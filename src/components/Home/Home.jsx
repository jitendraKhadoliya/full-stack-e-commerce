import Category from "./Category/Category.jsx";
import Banner from "../Home/Banner/Banner.jsx";
import Products from "../Products/Products.jsx";
import "./Home.scss";

const Home = () => {
  return (
    <div>

      <Banner />

      <div className="main-content">
        <div className="layout">
          <Category />
          <Products />
        </div>
      </div>

    </div>
  );
};

export default Home;
