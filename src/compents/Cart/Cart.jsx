import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import iconImg from "../../asset/bag.png";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "../Checkout/Checkout";
const Cart = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    if (cart.totalAmount === 0) {
      setShowDetails(false);
      setShowCheckOut(false);
    }
  }, [cart]);

  const toggleDetailsHandler = () => {
    if (cart.totalAmount === 0) {
      setShowDetails(false);
      return;
    }
    setShowDetails((prevState) => !prevState);
  };

  const toggleCheckOutHandler = () => {
    if (cart.totalAmount === 0) return;
    setShowCheckOut((prevState) => !prevState);
  };
  return (
    <div className={classes.Cart} onClick={toggleDetailsHandler}>
      {showCheckOut && <Checkout onHide={toggleCheckOutHandler} />}
      {showDetails && <CartDetails />}
      <div className={classes.Icon}>
        <img src={iconImg} alt="" />
        {cart.totalAmount === 0 ? null : (
          <span className={classes.TotalAmount}>{cart.totalAmount}</span>
        )}
      </div>
      {cart.totalAmount === 0 ? (
        <p className={classes.EmptyCart}>There are no items in your cart.</p>
      ) : (
        <p className={classes.Price}>{cart.totalPrice}</p>
      )}

      <button
        onClick={toggleCheckOutHandler}
        className={`${cart.totalAmount === 0 ? classes.Disable : classes.CheckoutButton}`}
      >
        Check Out
      </button>
    </div>
  );
};

export default Cart;
