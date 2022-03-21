import { configureStore } from "@reduxjs/toolkit";
import { charactersSlice } from "./charactersSlice";
import { houseSlice } from "./houseSlice";

const store = configureStore({
  reducer: { characters: charactersSlice.reducer, house: houseSlice.reducer },
});

export default store;
