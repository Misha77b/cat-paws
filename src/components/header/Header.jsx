import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
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
          fontWeight: "700",
          fontSize: "18px",
        }}
        color="darkGray.main"
      >
        PetsPaw
      </Typography>
    </Box>
  );
};

export default Header;
