import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "../theming/theme";
// import { RouterProvider } from "react-router-dom";
import RootRouter from "../router/RootRouter/RootRouter";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className="app" sx={{ background: "red" }}>
        <RootRouter />
      </Box>
    </ThemeProvider>
  );
};

export default App;
