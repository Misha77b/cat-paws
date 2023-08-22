import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF868E",
    },
    secondary: {
      main: "#1D1D1D",
    },
    mistyRose: {
      main: "#FBE0DC",
    },
    lightGray: {
      main: "#8C8C8C",
    },
  },
  typography: {
    fontFamily: ["Jost", "Monserrat"],
    fontWeightBold: 700,
    fontWeightSemiBold: 600,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightLight: 300,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});
