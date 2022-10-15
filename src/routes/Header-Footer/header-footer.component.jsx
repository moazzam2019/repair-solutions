import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import "./header-footer.styles.scss";
import { Container } from "@mui/system";
import Header from "./header.component";
import Footer from "./footer.component";

const HeaderFooter = () => {
  return (
    <Fragment>
      {/* Header */}
      <Header />
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
