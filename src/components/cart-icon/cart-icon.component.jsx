import "./cart-icon.styles.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <span className="item-count">{cartCount}</span>
      <ShoppingCartIcon
        sx={{
          color: "white",
          fontSize: "35px",
          margin: "45px 0 0 40px",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default CartIcon;
