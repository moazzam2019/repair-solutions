import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavbarButton = ({ label, link, onClick }) => {
  return (
    <Link className="nav-link" to={link} onClick={onClick}>
      <Button
        variant="contained"
        size="medium"
        className="navbar-button"
        style={{ margin: "10px" }}
      >
        {label}
      </Button>
    </Link>
  );
};

export default NavbarButton;
