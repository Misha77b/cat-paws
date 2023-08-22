import React from "react";
import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "470px",
        // "& .MuiTextField-root": {
        //   borderRadius: "20px",
        // },
      }}
    >
      <TextField
        fullWidth
        sx={{
          "& .MuiInputBase-input": {
            p: "15px 20px",
            borderRadius: `20px`,
            background: "#fff",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderRadius: `20px`,
              //   border: "transparent",
            },
          },
        }}
        placeholder="Search for breeds by name"
      />
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "20px",
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
