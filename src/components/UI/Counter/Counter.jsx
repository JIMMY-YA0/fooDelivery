import React from "react";
import { useDispatch } from "react-redux";
import { increase, subtract } from "../../../store/cartSlice";
import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Counter = (props) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.Counter}>
      {props.meal.quantity && props.meal.quantity !== 0 ? (
        <>
          <button
            className={classes.Sub}
            onClick={() => {
              dispatch(subtract(props.meal));
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={classes.Count}>{props.meal.quantity}</span>{" "}
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
