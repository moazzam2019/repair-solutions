import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarButton from "../navbar/navbar-button/navbar-button.component";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import AccountButton from "../account-button/account-button.component";
import { Fragment } from "react";
import "./header-drawer.styles.scss";

const signOutHandler = () => {
  localStorage.clear();
  window.location.replace("../");
};

export default function SwipeableTemporaryDrawer() {
  const { currentUser } = useContext(UserContext);
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="appbar-links">
        <NavbarButton label="Home" link="../" />
        <NavbarButton label="Shop" link="/shop" />
        <NavbarButton label="Contact" link="/contact" />
        {currentUser.length === 0 ? (
          <NavbarButton label="Sign In" link="/sign-in" />
        ) : (
          <NavbarButton label="Sign Out" onClick={signOutHandler} />
        )}
      </div>
      {Object.keys(currentUser).length > 0 ? (
        <>
          <Divider />
          <h3 style={{ textAlign: "center" }}>User Panel</h3>
          <Divider />
          <div className="appbar-links">
            <NavbarButton label="Update Data" link="/update-data" />
            <NavbarButton label="Change Password" link="/update-password" />
          </div>{" "}
        </>
      ) : (
        <div></div>
      )}

      {currentUser.length !== 0 && currentUser.role === "admin" ? (
        <>
          {" "}
          <Divider />
          <h3 style={{ textAlign: "center" }}>Admin Panel</h3>
          <Divider />
          <div className="appbar-links">
            <NavbarButton label="Add Phone" link="/add-product" />
            <NavbarButton label="Update Phone" link="/update-product" />
            <NavbarButton label="Delete Phone" link="/delete-product" />
          </div>
        </>
      ) : (
        <div></div>
      )}
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <MenuIcon onClick={toggleDrawer("left", true)}></MenuIcon>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
