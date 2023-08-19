import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootRouter from "./RootRouter";
import Home from "../pages/home/Home";
import Voting from "../pages/voting/Voting";
import Breeds from "../pages/breeds/Breeds";
import Gallary from "../pages/gallary/Gallary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRouter />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/voting",
        element: <Voting />,
      },
      {
        path: "/breeds",
        element: <Breeds />,
      },
      {
        path: "/gallary",
        element: <Gallary />,
      },
    ],
  },
]);
