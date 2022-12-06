import NavbarButton from "./navbar-button/navbar-button.component";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = () => {
    localStorage.clear();
    window.location.replace("../");
  };

  return (
    <>
      <NavbarButton label="Shop" link="/shop" />
      <NavbarButton label="Contact" link="/contact" />
      {currentUser.length === 0 ? (
        <NavbarButton label="Sign In" link="/sign-in" />
      ) : (
        <NavbarButton label="Sign Out" onClick={signOutHandler} />
      )}
    </>
  );
};

export default NavBar;
