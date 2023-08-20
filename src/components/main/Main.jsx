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
      <Header />
      <Box>
        <Greeting />
        {/* Nav icons */}
        <Navigation />
      </Box>
    </Box>
  );
};

export default Main;
