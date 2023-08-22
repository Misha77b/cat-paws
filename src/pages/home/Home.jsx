import React from "react";
import { Box } from "@mui/material";
import { boxStyle, backStyle } from "./sxStyles";

const Home = () => {
  return (
    <Box sx={boxStyle}>
      <Box sx={backStyle}></Box>
      <img
        style={{ maxWidth: "700px", maxHeight: "900px" }}
        src="./assets/home-background.png"
        alt="cats"
      />
    </Box>
  );
};

export default Home;
