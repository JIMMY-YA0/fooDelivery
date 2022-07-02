import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css";

const FilterMeals = (props) => {
  const inputChangeHandler = (e) => {
    const keyword = e.target.value.trim();
    props.search(keyword);
  };
  return (
    <div className={classes.FilterMeals}>
      <div className={classes.InputWrap}>
        <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon} />
        <input
          className={classes.SearchInput}
          onChange={inputChangeHandler}
          type="text"
          placeholder="Enter keyword to search "
        />
      </div>
    </div>
  );
};

export default FilterMeals;
