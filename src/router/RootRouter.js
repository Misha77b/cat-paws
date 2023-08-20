import React from "react";
import Grid from "@mui/material/Grid";
import { Outlet } from "react-router";
import Main from "../components/main/Main";

const RootRouter = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Main />
      </Grid>
      <Grid item xs={6}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default RootRouter;
