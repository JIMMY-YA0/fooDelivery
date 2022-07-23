import React from "react";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import classes from "./Checkout.module.css";

import CheckoutItem from "./CheckoutItem/CheckoutItem";
import CheckoutBar from "./CheckoutBar/CheckoutBar";
const checkoutRoot = document.getElementById("checkoutRoot");
const Checkout = (props) => {
  const { cart } = useSelector((state) => state);
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
          {cart.items.map((item) => {
            if (item.amount > 0) {
              return <CheckoutItem key={item.id} meal={item} />;
            }
            return null;
          })}
        </div>
        <footer className={classes.Footer}>
          <p className={classes.TotalPrice}>{cart.totalPrice}</p>
        </footer>
        <CheckoutBar totalPrice={cart.totalPrice} />
      </div>
    </div>,
    checkoutRoot
  );
};

export default Checkout;
