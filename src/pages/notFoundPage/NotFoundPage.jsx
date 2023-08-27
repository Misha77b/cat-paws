import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PawIcon from "./PawIcon";
import { notFoundBoxSx, oopsSx, errSx, homeBtnSx } from "./sxStyle";

const NotFoundPage = () => {
  return (
    <Box sx={notFoundBoxSx}>
      <PawIcon />
      <Typography sx={oopsSx} variant="h2">
        OOPS!
      </Typography>
      <Typography sx={errSx}>Error 404! Page not found</Typography>
      <Button component={Link} to="/" sx={homeBtnSx}>
        Home page
      </Button>
    </Box>
  );
};

export default NotFoundPage;
