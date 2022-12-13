import RSlogo from "../../assets/repair-solutions-logoo.png";
import { Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./header.styles.scss";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import NavBar from "../../components/navbar/navbar.component";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccountButton from "../../components/account-button/account-button.component";
import SearchBox from "../../components/search-box/search-box.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";

const Header = () => {
  const { isCartOpen } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  return (
    <Fragment>
      <div className="header-container">
        {/* 
        
        Top Header 
        
        */}
        <div className="top-header">
          <Container maxWidth="lg" className="header-top-main">
            <Grid container className="grid-container">
              <Grid item lg={2} md={2} className="header-top-item">
                <a href="tel:+4571723434">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    <PhoneIcon sx={{ fontSize: "18px" }} />
                    <span style={{ marginLeft: "5px" }}>+45-71723434</span>
                  </div>
                </a>
              </Grid>

              <Grid item lg={2} md={3} className="header-top-item">
                <a href="mailto:info@repairsolutions.dk">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    <EmailIcon
                      sx={{
                        fontSize: "18px",
                      }}
                    />
                    <span style={{ marginLeft: "5px" }}>
                      info@repairsolutions.dk
                    </span>
                  </div>
                </a>
              </Grid>
              <Grid
                item
                lg={3}
                md={2}
                className="header-top-item"
                sx={{ textAlign: "center" }}
              >
                {Object.keys(currentUser).length > 0 ? (
                  <AccountButton
                    label={currentUser.name}
                    buttonOne="Update Data"
                    linkOne={"/update-data"}
                    buttonTwo="Change Password"
                    linkTwo={"/update-password"}
                  />
                ) : (
                  <div></div>
                )}
              </Grid>
              <Grid item lg={2} md={2} className="header-top-item">
                {currentUser.length !== 0 && currentUser.role === "admin" ? (
                  <AccountButton
                    label="Admin Panel"
                    buttonOne="Add phone"
                    buttonTwo="Update Phone"
                    buttonThree="Delete Phone"
                    linkOne="/add-product"
                    linkTwo="/update-product"
                    linkThree="/delete-product"
                  />
                ) : (
                  <Fragment></Fragment>
                )}
              </Grid>
              <Grid item lg={3} md={3} className="header-top-item">
                <SearchBox />
              </Grid>
            </Grid>
          </Container>
        </div>
        {/* 


        Bottom Header 
        
        */}
        <div className="bottom-header">
          <Container maxWidth="lg" className="header-bottom-main">
            <Grid container className="grid-container">
              <Grid item lg={2} className="header-bottom-item">
                <Link className="logo-container" to="/">
                  <div>
                    <img src={RSlogo} className="logo" alt="Repair Solutions" />
                  </div>
                </Link>
              </Grid>
              <Grid item lg={3} md={2} className="header-bottom-item"></Grid>
              <Grid item lg={5} md={5} className="header-bottom-item">
                <NavBar />{" "}
              </Grid>
              <Grid item lg={2} md={2} className="header-bottom-item">
                <CartIcon />
                {isCartOpen && <CartDropdown />}
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
