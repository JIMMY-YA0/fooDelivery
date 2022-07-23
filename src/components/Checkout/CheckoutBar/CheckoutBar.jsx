import React from "react";
import classes from "./CheckoutBar.module.css";

const CheckoutBar = (props) => {
  return (
    <div className={classes.Bar}>
      <div className={classes.TotalPrice}>{props.totalPrice}</div>
      <button className={classes.Button}>Payment</button>
    </div>
  );
};

export default CheckoutBar;
