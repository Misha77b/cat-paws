import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
// import UseStylesNavigation from "./useStylesNavigation";

const NavItem = ({ title, color, img, imgAlt, imgSize, link }) => {
  //   UseStylesNavigation();

  return (
    <Box>
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
      <Button
        component={Link}
        to={link}
        sx={{
          marginTop: "10px",
          textAlign: "center",
          width: "138px",
          padding: "14px 0",
          color: "#FF868E",
          borderRadius: "10px",
        }}
      >
        {title}
      </Button>
    </Box>
  );
};

export default NavItem;
