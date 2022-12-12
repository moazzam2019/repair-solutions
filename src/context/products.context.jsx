import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

// import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
  searchProducts: "",
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState("");
  useEffect(() => {
    const getProducts = async () => {
      const API = "https://light-crow-kerchief.cyclic.app/api/phones";
      await axios.get(API).then((res) => {
        setProducts(res.data.data.phones);
      });
    };
    getProducts();
  }, []);
  // const newArray = products
  //   .filter((el) => {
  //     return el.category === "Apple";
  //   })
  //   .map((product) => console.log(product.name));
  const value = { products, searchProducts, setSearchProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
