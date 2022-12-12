import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import "./header-footer.styles.scss";
import { Container } from "@mui/system";
import Header from "./header.component";
import Footer from "./footer.component";
import HeaderMobile from "./header-mobile.component";
import { useTheme, useMediaQuery } from "@mui/material";

const HeaderFooter = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Fragment>
      {/* Header */}
      {matches ? <HeaderMobile /> : <Header />}
      {/* Main Content */}
      <Container maxWidth="lg">
        <Outlet />
      </Container>
      {/* Footer */}

      <Footer />
    </Fragment>
  );
};

export default HeaderFooter;
