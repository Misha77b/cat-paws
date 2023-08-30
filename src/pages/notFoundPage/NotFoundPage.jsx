import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { useRouteError, Link } from "react-router-dom";
import PawIcon from "./PawIcon";
import { notFoundBoxSx, oopsSx, errSx, homeBtnSx } from "./sxStyle";

const NotFoundPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <Box sx={notFoundBoxSx}>
      <PawIcon />
      <Typography sx={oopsSx} variant="h2">
        OOPS!
      </Typography>
      <Typography sx={errSx}>
        {`Error ${error.status}! ${error.statusText ?? error.message}`}
      </Typography>
      <Button component={Link} to="/" sx={homeBtnSx}>
        Home page
      </Button>
    </Box>
  );
};

export default NotFoundPage;
