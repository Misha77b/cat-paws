import React, { useState } from "react";
import { TextField, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const LimitItems = () => {
  const [limit, setLimit] = useState("10");

  const handleChange = (event) => {
    setLimit(event.target.value);
  };

  return (
    <TextField
      select
      value={limit}
      onChange={handleChange}
      SelectProps={{
        IconComponent: KeyboardArrowDownIcon,
      }}
      sx={{
        height: "40px",
        height: "40px",
        borderRadius: "10px",
        background: "#F8F8F7",
        ".MuiInputBase-root": {
          width: "101px",
          height: "inherit",
          borderRadius: "10px",
        },
        "& .MuiInputBase-input": {
          background: "#F8F8F7",
        },
      }}
    >
      <MenuItem value={5}>Limit: 5</MenuItem>
      <MenuItem value={10}>Limit: 10</MenuItem>
      <MenuItem value={15}>Limit: 15</MenuItem>
      <MenuItem value={20}>Limit: 20</MenuItem>
    </TextField>
  );
};

export default LimitItems;
