import { createContext, useState, useEffect } from "react";
import {addCollectionAndDocuments} from "../utils/firebase/fireBase";


export const ProductContext = createContext({
  product: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
 //  useEffect(()=>{
 // addCollectionAndDocuments('categories', SHOP_DATA)
 //  }, [])

  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
