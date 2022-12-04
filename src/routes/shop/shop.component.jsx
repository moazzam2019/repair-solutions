import { Routes, Route } from "react-router-dom";

import ProductsPreview from "../products/products-preview.component.jsx";
import Category from "../category/category.component";

import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<ProductsPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
