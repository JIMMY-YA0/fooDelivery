import React from "react";
import { useSelector } from "react-redux";
import { MEALS_DATA } from "../../data";
import Meal from "./Meal/Meal";
import classes from "./Meals.module.css";

// Food list
const Meals = () => {
  const { cart } = useSelector((state) => state);
  const { search } = useSelector((state) => state);
  return (
    // set the scrollbar to Meals
    <div className={classes.Meals}>
      {search.searchResult.length === 0
        ? MEALS_DATA.map((item) => <Meal key={item.id} meal={item} />)
        : search.searchResult.map((item) => <Meal key={item.id} meal={item} />)}
    </div>
  );
};

export default Meals;
