import { useEffect } from "react";

import Category from "./Category/Category.jsx";
import Banner from "../Home/Banner/Banner.jsx";
import Products from "../Products/Products.jsx";

import {fetchDataFromApi} from "../../utils/api.js";

import "./Home.scss";


const Home = () => {

  useEffect(()=>{

    const getCategories = () =>{
      fetchDataFromApi("/api/products?populate=*").then((res)=>console.log(res))
    }

    getCategories();
  },[])

   


  return (
    <div>

      <Banner />

      <div className="main-content">
        <div className="layout">
          <Category />
          <Products headingText="Popular Products" />
        </div>
      </div>

    </div>
  );
};

export default Home;
