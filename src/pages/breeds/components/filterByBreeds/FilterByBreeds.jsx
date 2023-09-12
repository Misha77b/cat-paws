import React, { useState } from "react";
import { TextField, MenuItem } from "@mui/material";

const FilterByBreeds = () => {
  const [breed, setBreed] = useState("");

  const handleChange = (event) => {
    setBreed(event.target.value);
  };

  return (
    <TextField
      className="scroll"
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
      }}
    >
      <MenuItem default value={null}>
        All breeds
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </TextField>
  );
};

export default FilterByBreeds;
