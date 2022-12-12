import { useContext, useState } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";
import { useEffect } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import Button from "../../components/button/button.component";
import { UserContext } from "../../context/user.context";

const Checkout = () => {
  useEffect(() => {
    document.title = "Checkout";
  });
  const { cartItems, cartTotal } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  // Stripe Payment

  const KEY =
    "pk_test_51MBKaqHLwIldxPu3xLWilOhlaMnVZDRPnjqsBQgP9pVGFb2dQ9lH1oWJ9AKIOeMahzsctA5MGBNV3apKspQL8P2d006g1wqIlT";

  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        await axios.post(
          "https://light-crow-kerchief.cyclic.app/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: cartTotal * 100,
          }
        );
        alert("Payment Successful!");
        window.location.replace("../");
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, [stripeToken]);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem._id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${cartTotal}</div>
      {cartTotal > 0 && currentUser.length !== 0 ? (
        <StripeCheckout
          name="Repair Solutions"
          image="https://avatars.githubusercontent.com/u/1486366?v=4"
          billingAddress
          shippingAddress
          description={`Your total is $${cartTotal}`}
          amount={cartTotal * 100}
          token={onToken}
          stripeKey={KEY}
        >
          <Button>CHECKOUT NOW</Button>
        </StripeCheckout>
      ) : (
        <h2>Please log in or Add item to Cart to Checkout</h2>
      )}
    </div>
  );
};

export default Checkout;
