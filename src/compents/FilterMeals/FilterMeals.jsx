import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { searchItem, resetSearch } from "../../store/searchSlice";
import classes from "./FilterMeals.module.css";

const FilterMeals = (props) => {
  const [keyword, setKeyword] = useState("");
  const { search } = useSelector((state) => state);
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    setKeyword(e.target.value.trim());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (keyword !== "") {
        console.log(keyword);
        dispatch(searchItem(keyword));
      } else {
        dispatch(resetSearch());
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  return (
    <div className={classes.FilterMeals}>
      <div className={classes.InputWrap}>
        <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon} />
        <input
          className={classes.SearchInput}
          onChange={inputChangeHandler}
          value={keyword}
          type="text"
          placeholder="Enter keyword to search "
        />
      </div>
    </div>
  );
};

export default FilterMeals;
