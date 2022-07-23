import React from "react";
import Meals from "./components/Meals/Meals";
// import { useState } from "react";

import FilterMeals from "./components/FilterMeals/FilterMeals";
import Cart from "./components/Cart/Cart";

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
