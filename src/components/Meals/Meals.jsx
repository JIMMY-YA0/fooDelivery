import React from "react";
import { useSelector } from "react-redux";

import { useGetProductsQuery } from "../../store/API/productApi";
import Meal from "./Meal/Meal";
import classes from "./Meals.module.css";

// Food list
const Meals = () => {
  const { search } = useSelector((state) => state);
  const { data: productsData, isSuccess } = useGetProductsQuery();
  return (
    // set the scrollbar to Meals

    <div className={classes.Meals}>
      {search.searchResult.length === 0 && isSuccess
        ? productsData.map((item) => <Meal key={item.id} meal={item} />)
        : search.searchResult.map((item) => <Meal key={item.id} meal={item} />)}
    </div>
  );
};

export default Meals;
