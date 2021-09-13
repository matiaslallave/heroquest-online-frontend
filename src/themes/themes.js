import { createTheme } from "@material-ui/core";

export const baseTheme = createTheme({
  typography: {
    fontFamily: "'Exocet', 'sans-serif'",
    fontWeightBold: "bold",
    fontSize: 12
  },
  palette: {
    primary: {
      main: "#DFCFA0",
    },
    secondary: {
      main: "#A0865A",
    },
    success: {
      main: "#14b316",
    },
    error: {
      main: "#ad1005",
    },
  },
});
