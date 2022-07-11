import React from "react";
import { useSelector } from "react-redux";
import Meal from "./Meal/Meal";
import classes from "./Meals.module.css";
// Food list
const Meals = () => {
  const { cart } = useSelector((state) => state);
  return (
    // set the scrollbar to Meals
    <div className={classes.Meals}>
      {cart.items.map((item) => (
        <Meal key={item.id} meal={item} />
      ))}
    </div>
  );
};

export default Meals;
