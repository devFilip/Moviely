import { createSlice } from "@reduxjs/toolkit";
import { Action } from "./configureStore";

const ratingSlice = createSlice({
  name: "rating",
  initialState: [],
  reducers: {
    addRating: (state, action: Action): any => {
      const { payload } = action;
      return [...state, payload];
    },
  },
});

export const { addRating } = ratingSlice.actions;
export default ratingSlice.reducer;
