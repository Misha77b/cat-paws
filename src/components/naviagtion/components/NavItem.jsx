import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import "./NavItem.scss";

const NavItem = ({ title, color, img, imgAlt, imgSize, link }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "130px",
          height: "190px",
          background: `${color}`,
          borderRadius: "20px",
          border: "4px solid rgba(255, 255, 255, 0.60)",
        }}
      >
        <img style={imgSize} src={img} alt={imgAlt} />
      </Box>
      <NavLink
        component={NavLink}
        className={({ isActive }) =>
          isActive ? "nav-box__btn-active" : "nav-box__btn"
        }
        to={link}
      >
        {title}
      </NavLink>
    </>
  );
};

export default NavItem;
