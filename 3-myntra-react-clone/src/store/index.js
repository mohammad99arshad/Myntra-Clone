import fetchStatusSlice from "./fetchStatusSlice";
import itemsReducer from "./itemsSlice";
import { configureStore } from "@reduxjs/toolkit";

const myntraStore = configureStore({
  reducer: {
    items: itemsReducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});

export default myntraStore;
