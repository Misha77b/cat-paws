import React from "react";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        // background: "pink",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "40vw",
          height: "98vh",
          top: "50%",
          left: "50%",
          transform: "translate(-42%, -50%)",
          background: "pink",
          zIndex: "-10",
          borderRadius: "20px",
        }}
      ></Box>
      <img
        style={{ maxWidth: "700px", maxHeight: "900px" }}
        src="./assets/home-background.png"
        alt="cats"
      />
    </Box>
  );
};

export default Home;
