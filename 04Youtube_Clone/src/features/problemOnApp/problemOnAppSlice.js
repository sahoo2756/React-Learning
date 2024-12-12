import { createSlice } from "@reduxjs/toolkit";

// Slice for managing application-level error states
const problemOnAppSlice = createSlice({
  name: "problemOnAppStore",
  initialState: {
    isErrorDuringVideoFetching: false, // Tracks if there's an error during video fetching
  },
  reducers: {
    setErrorDuringVideoFetchingTrue: (state) => {
      state.isErrorDuringVideoFetching = true; // Sets the error flag to true
    },
    setErrorDuringVideoFetchingFalse: (state) => {
      state.isErrorDuringVideoFetching = false; // Sets the error flag to true
    },
  },
});

// Action creators generated from the slice
export const { setErrorDuringVideoFetchingTrue , setErrorDuringVideoFetchingFalse} = problemOnAppSlice.actions;

// The reducer generated from the slice
const problemOnAppReducer = problemOnAppSlice.reducer;

export default problemOnAppReducer;
