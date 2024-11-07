import axios from 'axios';
import CollectionPreview from '../../components/Collections/Collections';
//import SHOP_DATA from './ShopData';
import { useEffect, useState } from 'react';
//import { Outlet } from 'react-router-dom';

const ShopPage = () => {
  const [shopData,setshopData] = useState([]);
  useEffect(() => {
    //setshopData(SHOP_DATA);
    const fetchProd = async () => {
      try {
        const res = await axios.get("http://localhost:3000/product");
        setshopData(res.data);
      } catch (err) {
        console.log("Error fetching", err.message);
      }
    };
    fetchProd();
  }, []);
  
  return (
    <>
    {shopData.map(collection => <CollectionPreview collection={collection}/>)}
    {/* <Outlet/> */}
    </>
  )
};

export default ShopPage;