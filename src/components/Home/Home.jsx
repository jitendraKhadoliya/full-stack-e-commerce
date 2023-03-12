import { useEffect, useContext } from "react";

import Category from "./Category/Category.jsx";
import Banner from "../Home/Banner/Banner.jsx";
import Products from "../Products/Products.jsx";


import {fetchDataFromApi} from "../../utils/api.js";
import { CreatedContext } from "../../utils/Context.js";

import "./Home.scss";


const Home = () => {

  useEffect(()=>{

    // writting function for categories
    const getCategories = () =>{
      fetchDataFromApi("/api/categories?populate=*").then((res)=>{
        // console.log(res);
        setCategories(res);
      })
    }
    // writting function for all products
    const getProducts = ()=>{
      fetchDataFromApi("/api/products?populate=*").then((res)=>{
        // console.log(res);
        setProducts(res);
      })
    }

    getCategories();
    getProducts();
  },[])

  

  // here i will access data from context.js folder

  const {categories,setCategories} = useContext(CreatedContext);
  const {products,setProducts} = useContext(CreatedContext);

  return (
    <div>

      <Banner />

      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products}  headingText="Popular Products" />
        </div>
      </div>

    </div>
  );
};

export default Home;
