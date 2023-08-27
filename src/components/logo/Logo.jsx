import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LogoIcon from "./LogoIcon";

const Logo = () => {
  return (
    <Link style={{ textDecoration: "none" }} to="/">
      <Box
        sx={{ display: "flex", gap: "8px", marginBottom: "75px" }}
        className="logo"
      >
        <LogoIcon />
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontWeight: "fontWeightBold",
            fontSize: "18px",
          }}
          color="secondary"
        >
          PetsPaw
        </Typography>
      </Box>
    </Link>
  );
};

export default Logo;
