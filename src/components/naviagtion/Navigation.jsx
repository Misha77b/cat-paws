import React, { useState, useEffect } from "react";
// MUI components
import { navData } from "./navData";
import { NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";
import NavItem from "./components/NavItem";
// import { NavbarLink } from "./components/styledNavLink";

const Navigation = () => {
  console.log(navData);

  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      {navData.map((item) => {
        return (
          <NavItem
            title={item.title}
            color={item.color}
            img={item.img}
            imgAlt={item.imgAlt}
            imgSize={item.imgSize}
            link={item.link}
          />
        );
      })}
      {/* <Box>
        <Box
          sx={{
            width: "130px",
            height: "190px",
            background: "#B4B7FF",
            borderRadius: "20px",
            border: "4px solid rgba(255, 255, 255, 0.60)",
          }}
        >
          <img src="./assets/voting.png" alt="voting" />
        </Box>
        <Button
          component={NavLink}
          to="/voting"
          sx={{
            marginTop: "10px",
            textAlign: "center",
            width: "138px",
            padding: "10px 0",
            color: "#FF868E",
            borderRadius: "10px",
          }}
        >
          VOTING
        </Button>
      </Box>
      <Box>
        <Box
          sx={{
            width: "130px",
            height: "190px",
            background: "#97EAB9",
            borderRadius: "20px",
            border: "4px solid rgba(255, 255, 255, 0.60)",
          }}
        >
          <img src="./assets/breeds.png" alt="voting" />
        </Box>
        <Button
          sx={{
            marginTop: "10px",
            textAlign: "center",
            width: "138px",
            padding: "10px 0",
            color: "#FF868E",
            borderRadius: "10px",
          }}
        >
          BREEDS
        </Button>
      </Box>
      <Box>
        <Box
          sx={{
            width: "130px",
            height: "190px",
            background: "#FFD280",
            borderRadius: "20px",
            border: "4px solid rgba(255, 255, 255, 0.60)",
          }}
        >
          <img src="./assets/gallary.png" alt="voting" />
        </Box>
        <Button
          sx={{
            marginTop: "10px",
            textAlign: "center",
            width: "138px",
            padding: "10px 0",
            color: "#FF868E",
            borderRadius: "10px",
          }}
        >
          GALLARY
        </Button>
      </Box> */}
    </Box>
  );
};

export default Navigation;
