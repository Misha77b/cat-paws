import React from "react";
import { Typography } from "@mui/material";

const Greeting = () => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          marginBottom: "10px",
          fontFamily: "Jost",
          fontSize: "44px",
          fontWeight: "500",
          lieHeight: "58px",
        }}
        color="darkGray.main"
      >
        Meow there!
      </Typography>
      <Typography
        sx={{
          marginBottom: "60px",
          fontFamily: "Jost",
          fontSize: "20px",
          fontWeight: "400",
        }}
        color="lightGray.main"
      >
        Welcome to cats API
      </Typography>
      <Typography
        sx={{
          marginBottom: "20px",
          fontFamily: "Jost",
          fontSize: "20px",
          fontWeight: "500",
        }}
        color="darkGray.main"
      >
        Lets start using The Cat API
      </Typography>
    </>
  );
};

export default Greeting;
