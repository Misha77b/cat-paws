import React from "react";
import { Box, Button } from "@mui/material";

const GridLayoutItem = ({ button }) => {
  return (
    <Box
      className="grid-item item1"
      sx={{
        position: "relative",
        "&:hover .card-cover": {
          display: "flex",
          transition: "0.4s",
        },
      }}
    >
      <img
        style={{
          borderRadius: "inherit",
          //   objectFit: "contain",
          width: "100%",
          height: "100%",
        }}
        src="https://i.pinimg.com/236x/0f/14/75/0f14755243496a2f66bcf3d7f14c2e5d.jpg"
        alt="alt"
      />
      <Box
        className="card-cover"
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "rgba(255, 134, 142, 0.60)",
          borderRadius: "inherit",
          display: "none",
          transition: "0.4s",
        }}
      >
        <Button
          color="primary"
          sx={{
            textTransform: "capitalize",
            width: "180px",
            background: "#FFF",
            "&:hover": {
              background: "#FFF",
            },
          }}
        >
          {button}
        </Button>
      </Box>
    </Box>
  );
};

export default GridLayoutItem;
