import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart.item.component";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);

  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  const mouseEnter = () => setIsCartOpen(true);
  const mouseLeave = () => setIsCartOpen(false);
  return (
    <div
      className="hidden-cart-dropdown"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
        <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
