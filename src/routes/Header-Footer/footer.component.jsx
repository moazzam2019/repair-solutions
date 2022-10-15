import RSlogo from "../../assets/repair-solutions-logo.png";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import "./footer.styles.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer-container">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <img src={RSlogo} style={{ width: "70%" }} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                sequi aliquid sint optio perspiciatis! Cumque eos repellat
                praesentium magnam in?
              </p>
            </Grid>
            <Grid item xs={3}>
              <h2>Contact us</h2>
              <ul className="list-one">
                <li>
                  <span>+45-71729778</span>
                </li>
                <li>
                  <span>info@repairsolutions.dk</span>{" "}
                </li>
                <li>
                  <i class="sp-map-marker"></i>
                  <span>777/ab Rampura Bonosri</span>
                  <span>North DC-3050 USA.</span>
                </li>
              </ul>
            </Grid>
            <Grid item xs={3}>
              <h2>Menu</h2>
              <ul>
                <li style={{ textDecoration: "none" }}>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Log in</a>
                </li>
                <li>
                  <a href="#">Register</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Checkout</a>
                </li>
              </ul>
            </Grid>
            <Grid item xs={3}>
              <h2>Subscribe to news</h2>
              <form class="f-subscribe-form" action="#">
                <span>
                  <input
                    placeholder="Your e-mail"
                    type="text"
                    style={{
                      marginRight: "5px",
                      boxSizing: "border-box",
                      height: "35px",
                      width: "79%",
                    }}
                  />
                </span>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#333333",
                  }}
                >
                  <SendIcon
                    color="primary"
                    sx={{ "&:hover": { color: "white", cursor: "pointer" } }}
                  />{" "}
                </button>
              </form>
              <p>
                Enter your email address if you want to receive our newsletter.
                Subscribe now!
              </p>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* 
      
      Footer Bottom  
      
      */}
      <div class="copyright">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={9} md={8}>
              <p>
                Copyright &copy;{" "}
                <a href="/" className="site-name">
                  Repair Solutions
                </a>{" "}
                All right reserved
              </p>
            </Grid>
            <Grid item xs={3} md={4}>
              <span>
                <IconButton href="#" color="primary">
                  <FacebookIcon />
                </IconButton>

                <IconButton href="#" color="primary">
                  <TwitterIcon />
                </IconButton>
                <IconButton href="#" color="primary">
                  <LinkedInIcon />
                </IconButton>
                <IconButton href="#" color="primary">
                  <InstagramIcon />
                </IconButton>
              </span>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
};

export default Footer;
