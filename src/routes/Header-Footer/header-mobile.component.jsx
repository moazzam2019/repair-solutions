import SwipeableTemporaryDrawer from "../../components/header-drawer/header-drawer.component";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchBox from "../../components/search-box/search-box.component";
import RSlogo from "../../assets/repair-solutions-logoo.png";
import { Link } from "react-router-dom";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";

export default function HeaderMobile() {
  const navigate = useNavigate();

  const NavigationHandler = () => {
    navigate("/checkout");
  };
  const { cartCount } = useContext(CartContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    ></Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "30px" }}>
      <AppBar position="static" sx={{ backgroundColor: "#333333" }}>
        <div style={{ textAlign: "center", margin: "15px auto" }}>
          <Link to="../">
            <img src={RSlogo} className="logo" alt="Repair Solutions" />{" "}
          </Link>
        </div>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <SwipeableTemporaryDrawer />
          </IconButton>
          <SearchBox />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              marginTop: "-15px",
            }}
            onClick={NavigationHandler}
          >
            <span style={{ fontWeight: "bold" }}>{cartCount}</span>
            <ShoppingCart sx={{ margin: "0 10px", fontSize: "30px" }} />
          </div>

          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
