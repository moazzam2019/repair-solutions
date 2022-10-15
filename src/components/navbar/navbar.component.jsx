import NavbarButton from "./navbar-button/navbar-button.component";

const NavBar = () => {
  return (
    <>
      <NavbarButton label="Reparation" link="/reparation" />

      <NavbarButton label="Shop" link="/shop" />
      <NavbarButton label="Contact" link="/contact" />
      <NavbarButton label="Sign In" link="/sign-in" />
    </>
  );
};

export default NavBar;
