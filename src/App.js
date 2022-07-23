import React from "react";
import Meals from "./components/Meals/Meals";
// import { useState } from "react";

import FilterMeals from "./components/FilterMeals/FilterMeals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <div>
        <FilterMeals />
        <Meals />
        <Cart />
      </div>
    </>
  );
}

export default App;
