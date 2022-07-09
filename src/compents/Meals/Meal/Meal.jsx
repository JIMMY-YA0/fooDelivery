import React from "react";
import classes from "./Meal.module.css";
import Counter from "../../UI/Counter/Counter";
const Meal = (props) => {
  return (
    <div className={classes.Meal}>
      <div className={classes.ImgBox}>
        <img src={props.meal.img} alt={props.meal.title} />
      </div>
      <div className={classes.DescBox}>
        <h2 className={classes.Title}>{props.meal.title}</h2>
        {/* Remove description from cartDetail */}
        {props.noDesc ? "" : <p className={classes.Desc}>{props.meal.desc}</p>}

        <div className={classes.PriceWrap}>
          <span className={classes.Price}>{props.meal.price}</span>
          <Counter meal={props.meal} />
        </div>
      </div>
    </div>
  );
};

export default Meal;
