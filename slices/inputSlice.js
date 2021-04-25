import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "input",
  initialState: {
    editDeedData: {},
  },
  reducers: {
    setEditDeedData: (state, action) => {
      console.log(action.payload);
      state.editDeedData = action.payload;
    },
  },
});

export const { setEditDeedData } = inputSlice.actions;
export default inputSlice.reducer;
