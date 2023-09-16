import React from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { paginationBox, btnStyle } from "./sxPagination";

const Pagination = () => {
  return (
    <Box sx={paginationBox}>
      <Button sx={btnStyle}>
        <ArrowBackIosIcon sx={{ fontSize: "16px" }} />
        Prev
      </Button>
      <Button sx={btnStyle}>
        Next
        <ArrowForwardIosIcon sx={{ fontSize: "16px" }} />
      </Button>
    </Box>
  );
};

export default Pagination;
