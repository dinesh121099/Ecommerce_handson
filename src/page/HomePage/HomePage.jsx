import React, { useState, useEffect } from "react";
import './HomePage.css';
import MenuItem from "../../components/menuitem/MenuItem";
import productCategories from "./products";

const HomePage = () => {
  const [prodData,setprodData] = useState(productCategories);

  // useEffect(() => {
  //   setprodData(productCategories.sections);
  // }, [])
  
  return (
    <div className="home-page">
      <h1>Welcome to my home page</h1>
      <div className="directory-menu">
        {prodData.sections.map((product) => <MenuItem key={product.id} product={product}/>  )}
      </div>
    </div>
  );
};

export default HomePage;
