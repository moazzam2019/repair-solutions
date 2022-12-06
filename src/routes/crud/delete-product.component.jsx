import React from "react";
import { Button, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import { UserContext } from "../../context/user.context";

function DeleteProduct() {
  const { products } = useContext(ProductsContext);
  const { config } = useContext(UserContext);

  const [name, setName] = useState("");

  const deleteData = async () => {
    var index = products.findIndex((item) => item.name === name);
    const id = products[index]._id;
    const API = `http://localhost:4000/api/phones/${id}`;

    await axios
      .delete(API, config)
      .then(() => {
        alert("Product deleted Successfully!");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "80%" },
        }}
        noValidate
        autoComplete="off"
      >
        <Select onChange={handleNameChange}>
          {products.map(({ name }) => (
            <MenuItem value={name}>{name}</MenuItem>
          ))}
        </Select>

        <Button variant="contained" onClick={deleteData}>
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default DeleteProduct;
