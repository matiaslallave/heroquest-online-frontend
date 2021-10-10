// import { createTheme } from "@material-ui/core";

// export const baseTheme = createTheme({
//   typography: {
//     fontFamily: "'Exocet', 'sans-serif'",
//     fontWeightBold: "bold",
//     fontSize: 12
//   },
//   palette: {
//     primary: {
//       main: "#DFCFA0",
//     },
//     secondary: {
//       main: "#A0865A",
//     },
//     success: {
//       main: "#14b316",
//     },
//     error: {
//       main: "#ad1005",
//     },
//   },
// });

import React, { createContext, useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const baseTheme = createTheme({
  typography: {
    fontFamily: "'Exocet', 'sans-serif'",
    fontWeightBold: "bold",
    fontSize: 12,
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

const alterTheme = createTheme({
  typography: {
    fontFamily: "'Ringbearer', 'sans-serif'",
    fontWeightBold: "bold",
    fontSize: 12,
  },
  palette: {
    primary: {
      main: "#a6a6a6",
    },
    secondary: {
      main: "#6b2819",
    },
    success: {
      main: "#14b316",
    },
    error: {
      main: "#ad1005",
    },
  },
});

export const ThemeContext = createContext({});

export default function ThemeWrapper({ children }) {
  const [isAlter, changeTheme] = useState(false);
  return (
    <ThemeProvider theme={isAlter ? alterTheme : baseTheme}>
      <ThemeContext.Provider value={{ isAlter, changeTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
