import React from "react";
import Counter from "../../UI/Counter/Counter";
import classes from "./CheckoutItem.module.css";

const CheckoutItem = (props) => {
  console.log("checkoutProps", props);
  return (
    <div className={classes.CheckoutItem}>
      <div className={classes.MealImg}>
        <img src={props.meal.attributes.img.data.attributes.url} alt="" />
      </div>
      <div className={classes.Desc}>
        <h2 className={classes.Title}>{props.meal.attributes.title}</h2>
        <div className={classes.PriceOuter}>
          <Counter meal={props.meal} />
          <p className={classes.Price}>{props.meal.quantity * props.meal.attributes.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
