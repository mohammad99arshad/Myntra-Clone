import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState:{
        fetchDone: false ,
        currentlyFetching: false,
    },
    reducers:{
        markFetchDone: (state) => {
            return state.fetchDone=true;
        } ,
        markFetchingStarted: (state) => {
            return state.fetchDone=true;
        }, markFetchingFinished: (state) => {
            return state.fetchDone=true;
        }
    }
  }
);


export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
