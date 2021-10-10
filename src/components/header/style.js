import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4))",
    padding: "0.3rem 1rem 0.3rem 1rem",
  },

  logo: {
    width: "85px",
  },

  nolink: {
    textDecoration: "none",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },

  loginRegister: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "50%",
    alignItems: "flex-start",
  },
  title: {
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "4rem",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  titleSM: {
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "",
    },
    [theme.breakpoints.up("md")]: {
        display: "none"
      },
  },
}));
