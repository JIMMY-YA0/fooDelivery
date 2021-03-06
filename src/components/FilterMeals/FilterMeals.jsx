import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { searchItem, resetSearch } from "../../store/searchSlice";
import { useGetProductsQuery } from "../../store/API/productApi";
import classes from "./FilterMeals.module.css";

const FilterMeals = (props) => {
  const [keyword, setKeyword] = useState("");

  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    setKeyword(e.target.value.trim());
  };
  const { data: productsData, isSuccess } = useGetProductsQuery();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (keyword !== "" && isSuccess) {
        dispatch(searchItem({ productsData, keyword }));
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [keyword, dispatch, isSuccess, productsData]);

  useEffect(() => {
    if (keyword === "") {
      dispatch(resetSearch());
    }
  }, [keyword, dispatch]);

  return (
    <div className={classes.FilterMeals}>
      <div className={classes.InputWrap}>
        <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon} />
        <input
          className={classes.SearchInput}
          onChange={inputChangeHandler}
          value={keyword}
          type="text"
          placeholder="Enter your search term"
        />
      </div>
    </div>
  );
};

export default FilterMeals;
