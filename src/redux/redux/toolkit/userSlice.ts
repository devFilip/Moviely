import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: {},
  },
  reducers: {
    getUsers: () => {},
    setUsers: (state, action): any => {
      return { ...state, users: [...action.payload] };
    },
    getUser: (state, action) => {},
    setUser: (state, action) => {
      return { ...state, user: action.payload };
    },
  },
});

export const { getUsers, setUsers, getUser, setUser } = userSlice.actions;
export default userSlice.reducer;
