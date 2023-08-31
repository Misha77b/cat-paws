import React from "react";
import { Box, Button } from "@mui/material";

const GridLayoutItem = () => {
  return (
    <Box className="grid-item item1">
      <img
        style={{
          borderRadius: "inherit",
          objectFit: "content",
          width: "100%",
          height: "100%",
        }}
        src="https://i.pinimg.com/236x/0f/14/75/0f14755243496a2f66bcf3d7f14c2e5d.jpg"
        alt="alt"
      />
      <Box></Box>
    </Box>
  );
};

export default GridLayoutItem;
