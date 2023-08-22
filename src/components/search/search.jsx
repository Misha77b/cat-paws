import React from "react";
import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "470px",
        // "& .MuiTextField-root": {
        //   borderRadius: "20px",
        // },
      }}
    >
      <TextField sx={{}} placeholder="Search for breeds by name" />
      <IconButton
        sx={{
          position: "absolute",
          //   top: "50%",
          right: "30px",
          width: "40px",
          height: "40px",
          background: "mistyRose",
          borderRadius: "10px",
          "&:hover": {
            background: "mistyRose",
          },
        }}
        color="primary"
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default Search;
