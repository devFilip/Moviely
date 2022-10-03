import { createSlice } from "@reduxjs/toolkit";
import { CommentModel } from "../../../models/CommentModel";

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
    approveComment: (state, action): any => {
      const { payload } = action;
      return [...state, payload];
    },
    denyComment: (state, action): any => {
      const { payload } = action;
      return [...state].filter((c: CommentModel) => c.id !== payload);
    },
  },
});

export default commentsSlice.reducer;

export const {
  addComment,
  getComments,
  setComments,
  approveComment,
  denyComment,
} = commentsSlice.actions;
