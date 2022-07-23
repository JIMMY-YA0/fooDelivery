import React from "react";
import classes from "./Meal.module.css";
import Counter from "../../UI/Counter/Counter";
const Meal = (props) => {
  return (
    <div className={classes.Meal}>
      <div className={classes.ImgBox}>
        {/* {console.log("url->", props.meal.img.data.attributes.url)} */}
        <img
          src={props.meal.attributes.img.data.attributes.url}
          alt={props.meal.attributes.title}
        />
      </div>
      <div className={classes.DescBox}>
        <h2 className={classes.Title}>{props.meal.attributes.title}</h2>
        {/* Remove description from cartDetail */}
        {props.noDesc ? "" : <p className={classes.Desc}>{props.meal.attributes.desc}</p>}

        <div className={classes.PriceWrap}>
          <span className={classes.Price}>{props.meal.attributes.price}</span>
          <Counter meal={props.meal} />
        </div>
      </div>
    </div>
  );
};

export default Meal;
