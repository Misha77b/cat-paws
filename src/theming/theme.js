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
          fontFamily: "Jost",
        },
      },
    },
    // MuiIconButton: {
    //   styleOverrides: {
    //     root: {
    //       width: 60,
    //       height: 60,
    //       padding: 0,
    //       color: "#FF868E",
    //       background: "#FFF",
    //       borderRadius: 20,
    //     },
    //   },
    // },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "#1D1D1D",
          fontFamily: "Jost",
          fontSize: "20px",
          fontWeight: "400",
          borderRadius: 20,
          background: "#FFF",
          "&::placeholder": {
            color: "#8C8C8C",
            fontFamily: "Jost",
            fontSize: "20px",
            fontWeight: "400",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            borderRadius: 20,
          },
          "& .MuiInputBase-input": {
            padding: "15px 20px 15px 20px",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "#FF868E",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF868E",
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "10px 10px 30px 30px",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          ".MuiMenuItem-root": {
            fontFamily: "Jost",
            color: "#8C8C8C",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "24px",
          },
        },
      },
    },
  },
});
