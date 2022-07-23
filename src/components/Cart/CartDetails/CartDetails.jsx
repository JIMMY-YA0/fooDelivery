import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../store/cartSlice";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from "../CartDetails/CartDetails.module.css";
import Meal from "../../Meals/Meal/Meal";
import Confirm from "../../UI/Confirm/Confirm";

const CartDetails = () => {
  const { cart } = useSelector((state) => state);
  console.log("cart", cart);
  const dispatch = useDispatch();
  // show confirm box
  const [showConfirm, setShowConfirm] = useState(false);
  const showConfirmBox = () => {
    setShowConfirm(true);
  };

  const cancleConfirm = (e) => {
    e.stopPropagation();
    setShowConfirm(false);
  };
  const resetCart = () => {
    // e.stopPropagation();
    dispatch(clearCart());
  };

  return (
    <Backdrop>
      {showConfirm && (
        <Confirm
          ConfirmText={"Are you sure you want to clear all items from your shopping cart?"}
          onCancel={cancleConfirm}
          onReset={resetCart}
        />
      )}

      <div className={classes.CartDetails} onClick={(e) => e.stopPropagation()}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>Your Meal</h2>
          <div className={classes.Clear} onClick={showConfirmBox}>
            <FontAwesomeIcon icon={faTrash} />
            <span>Reset</span>
          </div>
        </header>
        <div className={classes.MealList}>
          {cart.items.map((item) => {
            if (item.quantity > 0) {
              return <Meal noDesc key={item.id} meal={item} />;
            }
            return null;
          })}
        </div>
      </div>
    </Backdrop>
  );
};

export default CartDetails;
