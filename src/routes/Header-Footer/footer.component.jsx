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

const Footer = () => {
  return (
    <Fragment>
      <div className="footer-container"></div>{" "}
      {/* 
      
      Footer Bottom  
      
      */}
      <div class="copyright">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={9} md={8}>
              <p>
                Copyright &copy; <a href="/">Repair Solutions</a> All right
                reserved
              </p>
            </Grid>
            <Grid item xs={3} md={4}>
              <span>
                <IconButton href="/shop">
                  <FacebookIcon />
                </IconButton>

                <IconButton>
                  <TwitterIcon />
                </IconButton>
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
                <IconButton>
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
