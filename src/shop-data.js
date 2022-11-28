import axios from "axios";

const getProducts = async () => {
  const API = "http://localhost:4000/api/phones";
  await axios.get(API).then((res) => {
    console.log(res.data.data.phones);
  });
};
getProducts();

export default getProducts;
