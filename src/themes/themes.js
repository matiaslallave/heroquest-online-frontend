import { createTheme } from "@material-ui/core";

const baseTheme = createTheme({
    typography: {
        fontFamily: "'Exocet', 'sans-serif'",
        fontWeightBold:'bold'
    },
    palette:{
        primary: {
            main: "#DFCFA0",
        },
        secondary:{
            main: "#A0865A"
        },
        success:{
            main: "#14b316"
        }
    }
})

export {baseTheme};