import React from "react";
import { Box, Typography } from "@mui/material";

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
  );
};

export default Logo;
