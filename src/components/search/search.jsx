import React from "react";
import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const iconButtonStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  right: "10px",
  width: "40px",
  height: "40px",
  background: "mistyRose",
  borderRadius: "10px",
  "&:hover": {
    background: "mistyRose",
  },
};

const Search = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "470px",
        // maxWidth: "470px",
      }}
    >
      <TextField fullWidth placeholder="Search for breeds by name" />
      <IconButton sx={iconButtonStyle} color="primary">
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default Search;
