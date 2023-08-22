import React from "react";
// MUI components
import { Box } from "@mui/material";
// components
import Logo from "../logo/Logo";
import Greeting from "../greetings/Greeting";
import Navigation from "../naviagtion/Navigation";

const Main = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "fixed",
          left: "8%",
          top: "30px",
        }}
      >
        <Logo />
        <Box>
          <Greeting />
          <Navigation />
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
