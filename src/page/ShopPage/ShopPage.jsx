import axios from "axios";
// import CollectionPreview from "../../components/Collections/Collections";
//import SHOP_DATA from './ShopData';
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CollectionItem from "../../components/Collection-Item/CollectionItem";
//import { Outlet } from 'react-router-dom';

const ShopPage = () => {
  const [shopData, setshopData] = useState([]);
  const [catData, setcatData] = useState([]);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get("collections");

  useEffect(() => {
    //setshopData(SHOP_DATA);
    const fetchProd = async () => {
      try {
        const catRes = await axios.get("http://localhost:3000/shop");
        setcatData(catRes.data.categories);
        const res = await axios.get("http://localhost:3000/product");
        let filteredProducts = res.data;
        if (categoryFromUrl) {
          filteredProducts = filteredProducts.filter(
            (product) => product.categoryId == categoryFromUrl
          );
        }
        setshopData(filteredProducts);
        // console.log(catRes.data);
        // console.log(res.data)
        // console.log(res.status, catRes.data);
      } catch (err) {
        console.log("Error fetching", err.message);
      }
    };
    fetchProd();
  }, [categoryFromUrl]);

  const filteredCategories = categoryFromUrl
    ? catData.filter((category) => category.id == categoryFromUrl)
    : catData;

  return (
    <>
      {filteredCategories.length &&
        filteredCategories.map((collection) => (
          <div style={{ backgroundColor: "#e7e7e7", borderRadius:"20px" }}>
            <Link
              to={`/shop?collections=${collection.id}`}
              style={{
                textAlign: "center",
                textDecoration: "none",
                color: "black",
              }}
            >
              <h2 style={{ padding: "15px 0 0 0" }}>
                {collection.title?.toUpperCase()}
              </h2>
            </Link>
            <div style={{ display: "flex", flexWrap: "wrap", margin: "40px" }}>
              {categoryFromUrl
                ? shopData
                    .filter((product) => product.categoryId == collection.id)
                    .map((product) => <CollectionItem item={product} />)
                : shopData
                    .filter((product) => product.categoryId == collection.id)
                    .slice(0, 4)
                    .map((product) => <CollectionItem item={product} />)}
            </div>
          </div>
        ))}
      {/* <Outlet/> */}
    </>
  );
};

export default ShopPage;
