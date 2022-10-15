import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavbarButton = ({ label, link }) => {
  return (
    <Link className="nav-link" to={link}>
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
