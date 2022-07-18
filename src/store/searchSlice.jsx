import { createSlice } from "@reduxjs/toolkit";
import { MEALS_DATA } from "../data";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    items: MEALS_DATA,
    searchResult: [],
  },
  reducers: {
    searchItem(state, action) {
      state.searchResult = state.items.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    resetSearch(state) {
      state.searchResult = [];
    },
  },
});

export const { searchItem, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;
