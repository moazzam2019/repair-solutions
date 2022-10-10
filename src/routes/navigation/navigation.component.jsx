import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import RSlogo from "../../assets/repair-solutions-logo.png";
import "./navigation.styles.scss";

const NavBar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <img src={RSlogo} className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
