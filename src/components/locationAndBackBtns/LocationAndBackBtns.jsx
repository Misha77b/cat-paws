import React from "react";
import { Button, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import BackArrowIcon from "./components/BackArrowIcon";

const LocationAndBackBtns = () => {
  return (
    <>
      <IconButton
        sx={{
          width: "40px",
          height: "40px",
          background: "mistyRose",
          borderRadius: "10px",
          "&:hover": {
            background: "mistyRose",
          },
        }}
      >
        <BackArrowIcon />
      </IconButton>
      <NavLink
        style={{
          display: "inlineBlock",
          textAlign: "center",
          width: "138px",
          padding: "5px 0",
          color: "#fff",
          background: "#ff868e",
          borderRadius: "10px",
          fontFamily: "Jost",
          textDecoration: "none",
          fontWeight: "500",
          fontSize: "20px",
          textTransform: "uppercase",
        }}
      >
        Breeds
      </NavLink>
      {/* <Button
        sx={{
          width: "143px",
          background: "#FF868E",
          color: "white",
          "&:hover": {
            background: "#FF868E",
          },
        }}
      >
        Breeds
      </Button> */}
    </>
  );
};

export default LocationAndBackBtns;
