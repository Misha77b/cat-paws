import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{ display: "flex", gap: "8px", marginBottom: "75px" }}
      className="logo"
    >
      <img src="./assets/logo-paw.png" alt="logo" />
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "18px",
          color: "#1D1D1D",
        }}
      >
        PetsPaw
      </Typography>
    </Box>
  );
};

export default Header;
