import React from "react";
import {
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import { UserContext } from "../../context/user.context";

function DeleteProduct() {
  document.title = "Delete Phone";

  const { products } = useContext(ProductsContext);
  const { config } = useContext(UserContext);

  const [name, setName] = useState("");

  const deleteData = async () => {
    var index = products.findIndex((item) => item.name === name);
    const id = products[index]._id;
    const API = `https://light-crow-kerchief.cyclic.app/api/phones/${id}`;

    await axios
      .delete(API, config)
      .then((res) => {
        alert("Product deleted Successfully!");
        window.location.reload();
      })
      .catch((err) => {
        if (err.response.data.message === "jwt expired") {
          alert("Session expired, Please log in again.");
          localStorage.clear();
          window.location.replace("/sign-in");
        } else alert(err.response.data.message);
      });
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Delete Product</h1>

      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-label">
            Select Phone to Delete
          </InputLabel>
          <Select onChange={handleNameChange}>
            {products.map(({ name }) => (
              <MenuItem value={name}>{name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="contained" onClick={deleteData}>
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default DeleteProduct;
