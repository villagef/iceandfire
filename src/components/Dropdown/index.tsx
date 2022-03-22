import { Autocomplete, TextField } from "@mui/material";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { charactersActions } from "../../store/charactersSlice";

type IOptions = { label: string };

const DropdownSearch = (): JSX.Element => {
  const dispatch = useDispatch();
  const options: IOptions[] = [
    {
      label: "Any",
    },
    {
      label: "Male",
    },
    {
      label: "Female",
    },
  ];

  const handleChange = (e: any) => {
    e.preventDefault();
    const value =
      e.target.textContent === "Any" ? "" : e.target.textContent.toLowerCase();
    dispatch(charactersActions.handleGenderFilter(value));
  };

  return (
    <Autocomplete
      disablePortal
      onChange={handleChange}
      id="gender-input"
      options={options}
      sx={{ width: 220, padding: 1 }}
      renderInput={(params) => (
        <TextField {...params} label="Search by gender" />
      )}
    />
  );
};

export default memo(DropdownSearch);
