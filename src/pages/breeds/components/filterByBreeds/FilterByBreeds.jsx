import React, { useState } from "react";
import { TextField, MenuItem } from "@mui/material";
// import Select from "@mui/material/Select";

const FilterByBreeds = () => {
  const [breed, setBreed] = useState("");

  const handleChange = (event) => {
    setBreed(event.target.value);
  };

  return (
    <TextField
      select
      value={breed}
      displayEmpty
      onChange={handleChange}
      sx={{
        height: "40px",
        height: "40px",
        borderRadius: "10px",
        background: "#F8F8F7",
        ".MuiInputBase-root": {
          width: "226px",
          height: "inherit",
          borderRadius: "10px",
        },
        ".MuiSelect-select": {
          padding: "0 0 0 10px",
          background: "#F8F8F7",
        },
        ".MuiPaper-root": {
          borderRadius: "30px",
        },
      }}
    >
      {/* <Select
        sx={{
          padding: "0",
          height: "40px",
          borderRadius: "10px",
          background: "#F8F8F7",
        }}
      > */}
      <MenuItem default value={null}>
        All breeds
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
      {/* </Select> */}
    </TextField>
  );
};

export default FilterByBreeds;
