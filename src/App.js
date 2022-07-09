import React, { useCallback, useReducer } from "react";
import Meals from "./compents/Meals/Meals";
import { useState } from "react";
import CartContext from "./store/cart-context";

import Img1 from "./asset/1.png";
import Img2 from "./asset/2.png";
import Img3 from "./asset/3.png";
import Img4 from "./asset/4.png";
import Img5 from "./asset/5.png";
import Img6 from "./asset/6.png";
import Img7 from "./asset/7.png";
import FilterMeals from "./compents/FilterMeals/FilterMeals";
import Cart from "./compents/Cart/Cart";

const MEALS_DATA = [
  {
    id: "1",
    title: "Roadhouse Whopper1",
    desc: "Roadhouse Whopper contains Gluten, Eggs, Milk & milk products, Soy, Fish & crustacea, peanuts, Sesame.",
    price: 12,
    img: Img1,
  },
  {
    id: "2",
    title: "Roadhouse Whopper2",
    desc: "Roadhouse Whopper contains Gluten, Eggs, Milk & milk products, Soy, Fish & crustacea, peanuts, Sesame.",
    price: 20,
    img: Img2,
  },
  {
    id: "3",
    title: "Roadhouse Whopper3",
    desc: "Roadhouse Whopper contains Gluten, Eggs, Milk & milk products, Soy, Fish & crustacea, peanuts, Sesame.",
    price: 24,
    img: Img3,
  },
  {
    id: "4",
    title: "Roadhouse Whopper4",
    desc: "Roadhouse Whopper contains Gluten, Eggs, Milk & milk products, Soy, Fish & crustacea, peanuts, Sesame.",
    price: 21,
    img: Img4,
  },
  {
    id: "5",
    title: "Roadhouse Whopper5",
    desc: "Roadhouse Whopper contains Gluten, Eggs, Milk & milk products, Soy, Fish & crustacea, peanuts, Sesame.",
    price: 22,
    img: Img5,
  },
  {
    id: "6",
    title: "Roadhouse Whopper6",
    desc: "Roadhouse Whopper contains Gluten, Eggs, Milk & milk products, Soy, Fish & crustacea, peanuts, Sesame.",
    price: 14,
    img: Img6,
  },
  {
    id: "7",
    title: "Roadhouse Whopper7",
    desc: "Roadhouse Whopper contains Gluten, Eggs, Milk & milk products, Soy, Fish & crustacea, peanuts, Sesame.",
    price: 12,
    img: Img7,
  },
];

const cartReducer = (state, action) => {
  const newCart = { ...state };
  switch (action.type) {
    default:
      return state;
    case "ADD":
      if (newCart.items.indexOf(action.meal) === -1) {
        newCart.items.push(action.meal);
        action.meal.amount = 1;
      } else {
        // modify item's number
        action.meal.amount += 1;
      }

      // update totalAmount
      newCart.totalAmount += 1;
      // update totalPrice
      newCart.totalPrice += action.meal.price;

      return newCart;
    case "SUB":
      action.meal.amount -= 1;
      if (action.meal.amount === 0) {
        newCart.items.splice(newCart.items.indexOf(action.meal), 1);
      }
      newCart.totalAmount -= 1;
      newCart.totalPrice -= action.meal.price;
      return newCart;
    case "CLEAR":
      newCart.items.forEach((item) => {
        delete item.amount;
      });
      newCart.items = [];
      newCart.totalAmount = 0;
      newCart.totalPrice = 0;
      return newCart;
  }
};

function App() {
  // store burger list
  const [mealsData, setMealsData] = useState(MEALS_DATA);
  // store cart data
  /*
    1.staff []
    2.totalAmount : number
    3.totalPrice: number 
   */
  const [cartData, cartDataDispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  const search = (keyword) => {
    const searchResult = MEALS_DATA.filter((item) => item.title.match(keyword));
    setMealsData(searchResult);
  };

  return (
    <CartContext.Provider value={{ ...cartData, cartDataDispatch }}>
      <div>
        <FilterMeals search={search} />
        <Meals mealsData={mealsData} />
        <Cart />
      </div>
    </CartContext.Provider>
  );
}

export default App;
