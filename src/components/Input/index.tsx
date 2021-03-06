import { IconButton, TextField } from "@mui/material";
import { memo, useRef } from "react";
import { useDispatch } from "react-redux";
import { charactersActions } from "../../store/charactersSlice";
import SearchIcon from "@mui/icons-material/Search";

const InputSearch = (): JSX.Element => {
  const dispatch = useDispatch();
  const textFieldRef: any = useRef("");

  const handleChange = (e: any) => {
    e.preventDefault();
    const value = textFieldRef.current.value;
    dispatch(charactersActions.handleCultureFilter(value));
    textFieldRef.current.value = "";
  };

  return (
    <form onSubmit={handleChange}>
      <TextField
        id="culture"
        label="Search by culture"
        variant="outlined"
        inputRef={textFieldRef}
      />
      <IconButton
        size="large"
        aria-label="search"
        color="inherit"
        type="submit"
      >
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default InputSearch;
