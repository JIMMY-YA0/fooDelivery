// import React from "react";
// import ReactDOM from "react-dom";
// import classes from "./Backdrop.module.css";

// const backdropRoot = document.getElementById("backdrop-root");
// const Backdrop = (props) => {
//   return ReactDOM.createPortal(
//     <div className={classes.BackDrop}>{props.children}</div>,
//     backdropRoot
//   );
// };

// export default Backdrop;

import React from "react";
import classes from "./Backdrop.module.css";
import ReactDOM from "react-dom";

const backdropRoot = document.getElementById("backdropRoot");

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div {...props} className={`${classes.Backdrop} ${props.className}`}>{props.children}</div>,
    backdropRoot
  );
};

export default Backdrop;
