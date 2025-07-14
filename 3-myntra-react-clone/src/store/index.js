import itemsReducer from "./itemsSlice";
import { configureStore } from "@reduxjs/toolkit";

const myntraStore = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export default myntraStore;
