import React from "react";
import { Box, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const NavIcons = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-icon nav-icon__btn-active" : "nav-icon nav-icon__btn"
        }
        to="/likes"
      >
        <SentimentSatisfiedAltIcon sx={{ width: "30px", height: "30px" }} />
      </NavLink>
      <IconButton></IconButton>
      <IconButton></IconButton>
    </>
  );
};

export default NavIcons;
