import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";


const itemsSlice = createSlice({
  name: "items",
  initialState: DEFAULT_ITEMS,
  reducers: {
    addInitialItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addInitialItems } = itemsSlice.actions;
export default itemsSlice.reducer;
