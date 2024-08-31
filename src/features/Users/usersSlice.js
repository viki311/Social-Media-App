import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "vignesh",
  },
  {
    id: "1",
    name: "John",
  },
  {
    id: "2",
    name: "Keats",
  },
];

const usersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {},
});
export const selectAllUsers = (state) => state.Users;
export default usersSlice.reducer;
