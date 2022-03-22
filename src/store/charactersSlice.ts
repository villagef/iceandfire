import { createSlice } from "@reduxjs/toolkit";

interface IProps {
  characters: any[];
  firstPage: number;
  lastPage: number;
  gender: string;
  culture: string;
  currentPage: number;
  rowsPerPage: number;
  isLoading: boolean;
}

const initialState: IProps = {
  characters: [],
  firstPage: 1,
  lastPage: 0,
  gender: "",
  culture: "",
  currentPage: 1,
  rowsPerPage: 25,
  isLoading: true,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    fetchCharacters(state, action) {
      state.characters = action.payload;
    },
    toggleLoader(state, action) {
      state.isLoading = action.payload;
    },
    handleLastPage(state, action) {
      state.lastPage = action.payload;
    },
    handleCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    handleRowsPerPage(state, action) {
      state.rowsPerPage = action.payload;
    },
    handleGenderFilter(state, action) {
      state.gender = action.payload;
    },
    handleCultureFilter(state, action) {
      state.culture = action.payload;
    },
  },
});

export const charactersActions = charactersSlice.actions;
