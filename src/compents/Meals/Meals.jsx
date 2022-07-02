import React from "react";
import Meal from "./Meal/Meal";
import classes from "./Meals.module.css";
// Food list
const Meals = (props) => {
  return (
    // set the scrollbar to Meals
    <div className={classes.Meals}>
      {props.mealsData.map((item) => (
        <Meal key={item.id} meal={item} />
      ))}
    </div>
  );
};

export default Meals;
