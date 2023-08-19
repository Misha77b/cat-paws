import React from "react";
// MUI components
import { Box, Button } from "@mui/material";

const Navigation = () => {
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <Box>
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
          sx={{
            marginTop: "10px",
            textAlign: "center",
            width: "138px",
            padding: "14px 0",
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
            padding: "14px 0",
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
            padding: "14px 0",
            color: "#FF868E",
            borderRadius: "10px",
          }}
        >
          GALLARY
        </Button>
      </Box>
    </Box>
  );
};

export default Navigation;
