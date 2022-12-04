import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import { ProductsContext } from "../../context/products.context";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const categoryMain = category.charAt(0).toUpperCase() + category.slice(1);

  const { products } = useContext(ProductsContext);
  const [productsNew, setProductsNew] = useState(products);
  // const phone = "iPhone 14 Pro Max";

  // const productObject = products.filter((el) => {
  //   return el.name === phone;
  // });
  // const id = productObject[0]._id;
  // console.log(productObject);

  // console.log(id);

  useEffect(() => {
    const filteredProducts = products.filter((el) => {
      return el.category === categoryMain;
    });
    setProductsNew(filteredProducts);
  }, [categoryMain, products]);

  return (
    <Fragment>
      {products.length > 0 ? (
        <Fragment>
          <h2 className="category-title">{category.toUpperCase()}</h2>
          <div className="category-container">
            {productsNew.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>{" "}
        </Fragment>
      ) : (
        <h2>No {categoryMain} Products to show, Please connect backend</h2>
      )}
    </Fragment>
  );
};

export default Category;
