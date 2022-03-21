import { createSlice } from "@reduxjs/toolkit";

interface IProps {
  house: object;
  isLoading: boolean;
}

const initialState: IProps = {
  house: {},
  isLoading: true
};

export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
    fetchHouse(state, action) {
      state.house = action.payload;
    },
    toggleLoader(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const houseActions = houseSlice.actions;
