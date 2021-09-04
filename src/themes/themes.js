import { createTheme } from "@material-ui/core";

const baseTheme = createTheme({
    typography: {
        fontFamily: "'Exocet', 'sans-serif'",
        fontWeightBold:'bold'
    },
    palette:{
        primary: {
            main: "#DFCFA0",
        }
    }
})

export {baseTheme};