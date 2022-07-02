import React, { useContext } from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from "../CartDetails/CartDetails.module.css";
// import CartContext from "../../../store/cart-context";
import Meal from "../../Meals/Meal/Meal";

const CartDetails = () => {
  return (
    <Backdrop>
      <div className={classes.CartDetails}>
        <h2 className={classes.Title}>Your Meal</h2>
        <div className={classes.Clear}>
          <FontAwesomeIcon icon={faTrash} />
          <span>Reset</span>
        </div>
      </div>
    </Backdrop>
  );
};

export default CartDetails;
