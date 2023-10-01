import React from "react";
import Grid from "@mui/material/Grid";
import { Outlet } from "react-router";
import Main from "../components/main/Main";
import Header from "../components/header/Header";
import { useLocation } from "react-router-dom";

const RootRouter = () => {
  //   console.log(useLocation().pathname);
  //   temporary descision
  const location = useLocation().pathname;

  return (
    <Grid container>
      <Grid item xs={6}>
        <Main />
      </Grid>
      <Grid item xs={6}>
        {/* temporary descision for header render */}
        {location === "/" ? null : <Header />}
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default RootRouter;
