import RSlogo from "../../assets/repair-solutions-logo.png";
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

const Header = () => {
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="header-container">
        {/* 
        
        Top Header 
        
        */}
        <div className="top-header">
          <Container maxWidth="lg" className="header-top-main">
            <Grid container className="grid-container">
              <Grid item lg={2} className="header-top-item">
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

              <Grid item lg={2} className="header-top-item">
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
              <Grid item lg={3} className="header-top-item"></Grid>
              <Grid item lg={2} className="header-top-item">
                <AccountButton />
              </Grid>
              <Grid item lg={3} className="header-top-item">
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
                    <img src={RSlogo} className="logo" />
                  </div>
                </Link>
              </Grid>
              <Grid item lg={2} className="header-bottom-item"></Grid>
              <Grid item lg={6} className="header-bottom-item">
                <NavBar />{" "}
              </Grid>
              <Grid item lg={2} className="header-bottom-item">
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
