import React, { useContext } from "react";
import classes from "./Cart.module.css";
import iconImg from "../../asset/bag.png";
import CartContext from "../../store/cart-context";
import CartDetails from "./CartDetails/CartDetails";
const Cart = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.Cart}>
      {/* <CartDetails /> */}

      <div className={classes.Icon}>
        <img src={iconImg} />
        {cartCtx.totalAmount === 0 ? null : (
          <span className={classes.TotalAmount}>{cartCtx.totalAmount}</span>
        )}
      </div>
      {cartCtx.totalAmount === 0 ? (
        <p className={classes.EmptyCart}>There are no items in your cart.</p>
      ) : (
        <p className={classes.Price}>{cartCtx.totalPrice}</p>
      )}

      <button className={`${cartCtx.totalAmount === 0 ? classes.Disable : classes.CheckoutButton}`}>
        Check Out
      </button>
    </div>
  );
};

export default Cart;
