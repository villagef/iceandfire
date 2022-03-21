import { createSlice } from "@reduxjs/toolkit";

interface IProps {
  house: object;
}

const initialState: IProps = {
  house: {},
};

export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
    fetchHouse(state, action) {
      state.house = action.payload;
    },
  },
});

export const houseActions = houseSlice.actions;
