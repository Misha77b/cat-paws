import React from "react";
import Navigation from "../components/naviagtion/Navigation";
import { Outlet } from "react-router";

const RootRouter = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default RootRouter;
