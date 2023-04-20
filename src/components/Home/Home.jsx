import { useEffect, useContext, useState } from "react";

import Category from "./Category/Category.jsx";
import Banner from "../Home/Banner/Banner.jsx";
import Products from "../Products/Products.jsx";
import Loader from "../loader/Loader.jsx";

import { fetchDataFromApi } from "../../utils/api.js";
import { CreatedContext } from "../../utils/Context.js";

import "./Home.scss";

const Home = () => {
  // here i will access data from context.js folder

  const { categories, setCategories } = useContext(CreatedContext);
  const { products, setProducts } = useContext(CreatedContext);
  // * i will first put it into loading state till we get our data
  const [load, setLoad] = useState(true);
  //* console.log(categories);
  useEffect(() => {
    // writing function for categories
    const getCategories = () => {
      fetchDataFromApi("/api/categories?populate=*").then((res) => {
        // console.log(res);
        setCategories(res);
      });
    };
    // writing function for all products
    const getProducts = () => {
      fetchDataFromApi("/api/products?populate=*").then((res) => {
        // console.log(res);
        setProducts(res);
      });
    };
    getCategories();
    getProducts();
  }, [setCategories, setProducts]);

  // * creating this effect to control loading

  useEffect(() => {
    if (categories === undefined) {
      setLoad(true);
    } else setLoad(false);
  }, [categories]);

  return (
    <div>
      <Banner />

      <div className="main-content">
        <div className="layout">
          {load ? (
            <Loader
              title={
                "Sorry, backend limitations may cause shutdowns. Reactivation may take up to 2 mins. Thank you for your patience "
              }
            />
          ) : (
            <>
              <Category categories={categories} />
              <Products products={products} headingText="Popular Products" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
