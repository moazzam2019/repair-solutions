import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import HeaderFooter from "./routes/Header-Footer/header-footer.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import Contact from "./routes/contact/contact.component";
import AddProduct from "./routes/crud/add-product.component";
import UpdateProduct from "./routes/crud/update-product.component";
import DeleteProduct from "./routes/crud/delete-product.component";
import UpdatePassword from "./routes/crud/update-password.component";
import UpdateData from "./routes/crud/update-data.component";
import SearchPage from "./routes/search-page/search-page.component";

const App = () => {
  document.title = "Repair Solutions";
  return (
    <Routes>
      <Route path="/" element={<HeaderFooter />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="contact" element={<Contact />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="update-product" element={<UpdateProduct />} />
        <Route path="delete-product" element={<DeleteProduct />} />
        <Route path="update-password" element={<UpdatePassword />} />
        <Route path="update-data" element={<UpdateData />} />
        <Route path="search-page" element={<SearchPage />} />
      </Route>
    </Routes>
  );
};

export default App;
