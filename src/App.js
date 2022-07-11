import React from "react";
import Meals from "./compents/Meals/Meals";
// import { useState } from "react";

import FilterMeals from "./compents/FilterMeals/FilterMeals";
import Cart from "./compents/Cart/Cart";

// const cartReducer = (state, action) => {
//   const newCart = { ...state };
//   switch (action.type) {
//     default:
//       return state;
//     case "ADD":
//       if (newCart.items.indexOf(action.meal) === -1) {
//         newCart.items.push(action.meal);
//         action.meal.amount = 1;
//       } else {
//         // modify item's number
//         action.meal.amount += 1;
//       }

//       // update totalAmount
//       newCart.totalAmount += 1;
//       // update totalPrice
//       newCart.totalPrice += action.meal.price;

//       return newCart;
//     case "SUB":
//       action.meal.amount -= 1;
//       if (action.meal.amount === 0) {
//         newCart.items.splice(newCart.items.indexOf(action.meal), 1);
//       }
//       newCart.totalAmount -= 1;
//       newCart.totalPrice -= action.meal.price;
//       return newCart;
//     case "CLEAR":
//       newCart.items.forEach((item) => {
//         delete item.amount;
//       });
//       newCart.items = [];
//       newCart.totalAmount = 0;
//       newCart.totalPrice = 0;
//       return newCart;
//   }
// };

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
        {/* <FilterMeals /> */}
        <Meals />
        <Cart />
      </div>
    </>
  );
}

export default App;
