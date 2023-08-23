import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Box
      sx={{ display: "flex", gap: "8px", marginBottom: "75px" }}
      className="logo"
    >
      <img
        style={{ width: "24px", height: "24px" }}
        src="./assets/logo-paw.png"
        alt="logo"
      />
      <Link style={{ textDecoration: "none" }} to="/">
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
      </Link>
    </Box>
  );
};

export default Logo;
