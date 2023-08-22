import React from "react";
// MUI components
import { Box } from "@mui/material";
// components
import Header from "../header/Header";
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
        <Header />
        <Box>
          <Greeting />
          <Navigation />
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
