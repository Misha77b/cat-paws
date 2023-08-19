import React from "react";
import { Outlet } from "react-router";
import Main from "../components/main/Main";

const RootRouter = () => {
  return (
    <>
      <Main />
      <Outlet />
    </>
  );
};

export default RootRouter;
