import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// let deviceWidth = document.documentElement.clientWidth;
// document.documentElement.style.fontSize = deviceWidth + "px";
document.documentElement.style.fontSize = 100 / 750 + "vw";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
