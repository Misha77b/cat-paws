import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import { TextField, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { limitItems } from "./limitItmesArray";

const LimitItems = ({ limit, setLimit }) => {
  const [search, setSearch] = useSearchParams();
  //   const [limit, setLimit] = useState("10");

  const handleChange = (event) => {
    setLimit(event.target.value);
    search.set("limit", event.target.value);
    setSearch(search);
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
      {limitItems.map((item) => {
        return (
          <MenuItem key={item.value} value={item.value}>
            {item.text}
          </MenuItem>
        );
      })}
      {/* <MenuItem value={10}>Limit: 10</MenuItem>
      <MenuItem value={15}>Limit: 15</MenuItem>
      <MenuItem value={20}>Limit: 20</MenuItem> */}
    </TextField>
  );
};

export default LimitItems;

LimitItems.propTypes = {
  pageNumber: PropTypes.number,
  setPageNumber: PropTypes.func,
};
