import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import PawIcon from "./PawIcon";

const NotFoundPage = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
      spacing={{ xs: 2 }}
    >
      <Grid item xs="6">
        <Typography variant="h2">Such page doesn't exist</Typography>
      </Grid>
      <Grid item xs="6">
        <PawIcon />
      </Grid>
    </Grid>
  );
};

export default NotFoundPage;
