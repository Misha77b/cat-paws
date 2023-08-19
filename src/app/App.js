import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "../theming/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "../router/Router";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
