import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cartSlice, { increase, subtract } from "../../../store/cartSlice";
import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

// Counter components
const Counter = (props) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  return (
    <div className={classes.Counter}>
      {props.meal.amount && props.meal.amount !== 0 ? (
        <>
          <button
            className={classes.Sub}
            onClick={() => {
              dispatch(subtract(props.meal));
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={classes.Count}>{props.meal.amount}</span>{" "}
        </>
      ) : null}
      <button
        className={classes.Add}
        onClick={() => {
          console.log(props.meal);
          dispatch(increase(props.meal));
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Counter;
