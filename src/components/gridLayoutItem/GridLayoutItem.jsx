import React from "react";
import { Box, Button } from "@mui/material";

const GridLayoutItem = ({ itemIndex, imgUrl, button }) => {
  return (
    <Box
      className={`grid-item ${itemIndex}`}
      sx={{
        position: "relative",
        "&:hover .card-cover": {
          display: "flex",
        },
      }}
    >
      <img
        style={{
          borderRadius: "inherit",
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
        src={imgUrl}
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
