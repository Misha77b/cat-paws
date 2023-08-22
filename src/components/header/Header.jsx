import React from "react";
import { Box } from "@mui/material";
import Search from "../search/Search";
import NavIcons from "../navIcons/NavIcons";

const Header = () => {
  return (
    <Box sx={{ display: "flex", gap: "10px", width: " 100%" }}>
      <Search />
      <NavIcons />
    </Box>
  );
};

export default Header;
