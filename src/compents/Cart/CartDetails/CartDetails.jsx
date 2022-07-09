import React, { useContext, useState } from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from "../CartDetails/CartDetails.module.css";
import CartContext from "../../../store/cart-context";
import Meal from "../../Meals/Meal/Meal";
import Confirm from "../../UI/Confirm/Confirm";

const CartDetails = () => {
  const ctx = useContext(CartContext);

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
    ctx.clearCart();
    // setShowConfirm(false);
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
          {ctx.items.map((item) => (
            <Meal noDesc key={item.id} meal={item} />
          ))}
        </div>
      </div>
    </Backdrop>
  );
};

export default CartDetails;
