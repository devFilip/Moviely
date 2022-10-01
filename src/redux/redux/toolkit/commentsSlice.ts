import { Action, createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: [],
  reducers: {
    addComment: (state, action): any => {
      const { payload } = action;
      return [...state, payload];
    },
    getComments: () => {},
    setComments: (state, action): any => {
      return [...state, ...action.payload];
    },
  },
});

export default commentsSlice.reducer;

export const { addComment, getComments, setComments } = commentsSlice.actions;
