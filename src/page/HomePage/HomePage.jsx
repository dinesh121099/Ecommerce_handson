import React, { useState, useEffect } from "react";
import './HomePage.css';
import MenuItem from "../../components/menuitem/MenuItem";
//import productCategories from "./products";
import axios from "axios";

const HomePage = () => {
  const [prodData,setprodData] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:3000/shop");
        console.log(res)
        setprodData(res.data);
      } catch (err) {
        console.log("Error fetching", err.message);
      }
    };
    fetchCategories();
  }, []);
  

  // useEffect(() => {
  //   setprodData(productCategories.sections);
  // }, [])
  
  return (
    <div className="home-page">
      <h1>Welcome to my home page</h1>
      <div className="directory-menu">
        {prodData.map((product) => <MenuItem key={product.id} product={product}/>  )}
      </div>
    </div>
  );
};

export default HomePage;
