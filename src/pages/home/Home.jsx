import React from "react";
import { Box } from "@mui/material";

const boxStyle = {
  display: "flex",
  justifyContent: "flex-end",
  position: "relative",
};

const backStyle = {
  position: "absolute",
  width: "40vw",
  height: "98vh",
  top: "50%",
  left: "50%",
  transform: "translate(-42%, -50%)",
  background: "pink",
  zIndex: "-10",
  borderRadius: "20px",
};

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
