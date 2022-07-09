import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css";

const FilterMeals = (props) => {
  const [keyword, setKeyword] = useState("");

  const inputChangeHandler = (e) => {
    setKeyword(e.target.value.trim());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      props.search(keyword);
      console.log("triggle");
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
