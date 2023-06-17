import { createSlice } from "@reduxjs/toolkit";

const binInitialState = {
  bin: [],
  change: false,
};

const recycleBinSlice = createSlice({
  name: "recycleBin",
  initialState: binInitialState,
  reducers: {
    addInBin(state, action) {
      state.bin.push(action.payload);
      state.change = true;
    },
    emptyBin(state) {
      state.bin = [];
      state.change = true;
    },
    finalBin(state, action) {
      state.bin = action.payload;
      state.change = false;
    },
  },
});
export const recycleBinActions = recycleBinSlice.actions;

export default recycleBinSlice.reducer;
