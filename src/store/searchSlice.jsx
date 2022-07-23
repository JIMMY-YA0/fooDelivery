import { createSlice } from "@reduxjs/toolkit";

// const { data: productsData, isSuccess } = productApi.useGetProductsQuery();

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResult: [],
  },
  reducers: {
    searchItem(state, action) {
      const { productsData, keyword } = action.payload;
      state.searchResult = productsData.filter((item) =>
        item.attributes.title.toLowerCase().includes(keyword.toLowerCase())
      );
    },
    resetSearch(state) {
      state.searchResult = [];
    },
  },
});

export const { searchItem, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;
