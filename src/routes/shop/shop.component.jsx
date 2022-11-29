import { useContext, useState } from "react";
import { ProductsContext } from "../../context/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
import { Fragment } from "react";

const Shop = () => {
  document.title = "Shop";
  const { products } = useContext(ProductsContext);
  return (
    <Fragment>
      {products.length > 0 ? (
        <div className="products-container">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <h1>No Products to show, Please connect backend server.</h1>
      )}
    </Fragment>
  );
};

export default Shop;
