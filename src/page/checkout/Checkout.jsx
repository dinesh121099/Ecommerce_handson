import "./Checkout.scss";
import { connect } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { PayPalButtons } from "@paypal/react-paypal-js";

const Checkout = ({ cartItems, totalPrice }) => {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalPrice,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      console.log(details);
      const name = details.payer.name.given_name;
      alert("success");
    });
  };
  
  const handleError = (err) => {
    console.error("PayPal Error: ", err);
    alert("An error occurred during the payment process");
  };

  return (
    <>
      <div className="checkout-page">
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
        {cartItems.map((item, idx) => (
          <CheckoutItem key={idx} item={item} />
        ))}
        <div className="total">
          <span>Total: $ {totalPrice}</span>
        </div>
        <PayPalButtons
          style={{ layout: "horizontal" }}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={handleError}
        ></PayPalButtons>
        <div className="test-warning">
          *** WARNING!!! This is a test page - Please use the following test
          credit card for the payments ***
          <br />
          4137 3503 0339 4*** - Exp: 05/25 - CVV:4**
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
  totalPrice: cart.cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  ),
});

export default connect(mapStateToProps, null)(Checkout);
