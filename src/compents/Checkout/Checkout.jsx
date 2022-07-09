import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import classes from "./Checkout.module.css";
import CartContext from "../../store/cart-context";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import CheckoutBar from "./CheckoutBar/CheckoutBar";
const checkoutRoot = document.getElementById("checkoutRoot");
const Checkout = (props) => {
  const ctx = useContext(CartContext);
  return ReactDOM.createPortal(
    <div className={classes.Checkout}>
      <div className={classes.Close}>
        <FontAwesomeIcon icon={faXmark} onClick={() => props.onHide()} />
      </div>

      <div className={classes.MealsDesc}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>Order Details</h2>
        </header>
        <div className={classes.Meals}>
          {ctx.items.map((item) => (
            <CheckoutItem key={item.id} meal={item} />
          ))}
        </div>
        <footer className={classes.Footer}>
          <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
        </footer>
        <CheckoutBar totalPrice={ctx.totalPrice} />
      </div>
    </div>,
    checkoutRoot
  );
};

export default Checkout;
