import React, { useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import iconImg from "../../asset/bag.png";
import CartContext from "../../store/cart-context";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "../Checkout/Checkout";
const Cart = () => {
  const cartCtx = useContext(CartContext);
  const [showDetails, setShowDetails] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);

  useEffect(() => {
    if (cartCtx.totalAmount === 0) {
      setShowDetails(false);
      setShowCheckOut(false);
    }
  }, [cartCtx]);

  const toggleDetailsHandler = () => {
    if (cartCtx.totalAmount === 0) {
      setShowDetails(false);
      return;
    }
    setShowDetails((prevState) => !prevState);
  };

  const toggleCheckOutHandler = () => {
    if (cartCtx.totalAmount === 0) return;
    setShowCheckOut((prevState) => !prevState);
  };
  return (
    <div className={classes.Cart} onClick={toggleDetailsHandler}>
      {showCheckOut && <Checkout onHide={toggleCheckOutHandler} />}
      {showDetails && <CartDetails />}
      <div className={classes.Icon}>
        <img src={iconImg} alt="" />
        {cartCtx.totalAmount === 0 ? null : (
          <span className={classes.TotalAmount}>{cartCtx.totalAmount}</span>
        )}
      </div>
      {cartCtx.totalAmount === 0 ? (
        <p className={classes.EmptyCart}>There are no items in your cart.</p>
      ) : (
        <p className={classes.Price}>{cartCtx.totalPrice}</p>
      )}

      <button
        onClick={toggleCheckOutHandler}
        className={`${cartCtx.totalAmount === 0 ? classes.Disable : classes.CheckoutButton}`}
      >
        Check Out
      </button>
    </div>
  );
};

export default Cart;
