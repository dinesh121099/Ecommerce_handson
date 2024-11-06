import CollectionPreview from '../../components/Collections/Collections';
import SHOP_DATA from './ShopData';
import { useEffect, useState } from 'react';

const ShopPage = () => {
  const [shopData,setshopData] = useState([]);
  useEffect(() => {
    setshopData(SHOP_DATA);   
  }, [])
  
  return (
     shopData.map(collection => <CollectionPreview collection={collection} />)
  )
}

export default ShopPage