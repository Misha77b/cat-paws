import React from "react";
import { Box } from "@mui/material";
import Search from "../search/Search";
import NavIcons from "../navIcons/NavIcons";

const Header = () => {
  return (
    <Box
      sx={{
        marginBottom: "10px",
        display: "flex",
        gap: "10px",
      }}
    >
      <Search />
      <NavIcons />
    </Box>
  );
};

export default Header;
