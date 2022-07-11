import React from "react";
import Backdrop from "../Backdrop/Backdrop";

import classes from "./Confirm.module.css";
const Confirm = (props) => {
  return (
    <Backdrop className={classes.ConfirmOuter} onClick={(e) => e.stopPropagation()}>
      <div className={classes.Confirm}>
        <p className={classes.ConfirmText}>{props.ConfirmText}</p>
        <div className={classes.ConfirmButton}>
          <button className={classes.Cancel} onClick={(e) => props.onCancel(e)}>
            Cancel
          </button>
          <button className={classes.Reset} onClick={() => props.onReset()}>
            Reset
          </button>
        </div>
      </div>
    </Backdrop>
  );
};

export default Confirm;
