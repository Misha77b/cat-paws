import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootRouter from "./RootRouter";
import Home from "../pages/home/Home";
import Voting from "../pages/voting/Voting";
import Breeds from "../pages/breeds/Breeds";
import Gallary from "../pages/gallary/Gallary";
import Likes from "../pages/likes/Likes";
import Favourites from "../pages/favourites/Favourites";
import Dislikes from "../pages/dislikes/Dislikes";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRouter />,
    errorElement: <NotFoundPage />,
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
      {
        path: "/likes",
        element: <Likes />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
      {
        path: "/dislikes",
        element: <Dislikes />,
      },
    ],
  },
]);
