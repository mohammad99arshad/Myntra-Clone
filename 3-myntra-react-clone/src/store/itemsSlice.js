import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addInitialItems } = itemsSlice.actions;
export default itemsSlice.reducer;
