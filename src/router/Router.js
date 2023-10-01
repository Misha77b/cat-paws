import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootRouter from "./RootRouter";
import Home from "../pages/home/Home";
import Voting from "../pages/voting/Voting";
import Breeds from "../pages/breeds/Breeds";
import BreedInfo from "../pages/breedInfo/BreedInfo";
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
        // path: "/",
        element: <Home />,
        index: true,
      },
      //   voting
      {
        path: "/voting",
        element: <Voting />,
      },
      //   breeds
      {
        path: "/breeds",
        element: <Breeds />,
      },
      {
        path: "/breeds/:id",
        element: <BreedInfo />,
      },
      //   gallary
      {
        path: "/gallary",
        element: <Gallary />,
      },
      //   likes
      {
        path: "/likes",
        element: <Likes />,
      },
      //   favourites
      {
        path: "/favourites",
        element: <Favourites />,
      },
      //   dislikes
      {
        path: "/dislikes",
        element: <Dislikes />,
      },
    ],
  },
]);
