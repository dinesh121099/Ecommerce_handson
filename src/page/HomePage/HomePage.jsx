import React, { useState, useEffect } from "react";
import "./HomePage.css";
import MenuItem from "../../components/menuitem/MenuItem";
//import productCategories from "./products";
import axios from "axios";

const HomePage = () => {
  const [prodData, setprodData] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:3000/shop");
        setprodData(res.data.categories);
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
      <h1>Welcome to Crown Shopping</h1>
      <div className="section-divider">
    <p>Explore our collection of amazing products!</p>
  </div>
      <div className="directory-menu">
        {prodData.length && prodData.map((product) => (
          <MenuItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
