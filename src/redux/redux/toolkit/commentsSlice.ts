import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: [],
  reducers: {
    addComment: (state, action): any => {
      const { payload } = action;
      return [...state, payload];
    },
  },
});

export default commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;
