import React from "react";
import "./navIcons.scss";
import { NavLink } from "react-router-dom";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const NavIcons = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-icon nav-icon__btn-active" : "nav-icon nav-icon__btn"
        }
        to="/likes"
      >
        <SentimentSatisfiedAltIcon sx={{ width: "35px", height: "35px" }} />
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-icon nav-icon__btn-active" : "nav-icon nav-icon__btn"
        }
        to="/favourites"
      >
        <FavoriteBorderOutlinedIcon sx={{ width: "35px", height: "35px" }} />
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-icon nav-icon__btn-active" : "nav-icon nav-icon__btn"
        }
        to="/dislikes"
      >
        <SentimentVeryDissatisfiedIcon sx={{ width: "35px", height: "35px" }} />
      </NavLink>
    </>
  );
};

export default NavIcons;
