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
          fontWeight: "fontWeightMedium",
          lieHeight: "58px",
        }}
        color="secondary"
      >
        Meow there!
      </Typography>
      <Typography
        sx={{
          marginBottom: "60px",
          fontFamily: "Jost",
          fontSize: "20px",
          fontWeight: "fontWeightRegular",
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
          fontWeight: "fontWeightMedium",
        }}
        color="secondary"
      >
        Lets start using The Cat API
      </Typography>
    </>
  );
};

export default Greeting;
