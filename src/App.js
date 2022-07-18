import React from "react";
import Meals from "./compents/Meals/Meals";
// import { useState } from "react";

import FilterMeals from "./compents/FilterMeals/FilterMeals";
import Cart from "./compents/Cart/Cart";

function App() {
  // store burger list
  // const [mealsData, setMealsData] = useState(MEALS_DATA);

  // const search = (keyword) => {
  //   const searchResult = MEALS_DATA.filter((item) => item.title.match(keyword));
  //   // setMealsData(searchResult);
  // };

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
