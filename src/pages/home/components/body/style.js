import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  bodyContainer: {
      width: "100vw",
      height: "100vh",
  },
  buttonHome: {
      padding: "1.5rem",
      [theme.breakpoints.down('xs')]: {
        width: "-webkit-fill-available;",
        padding: "0.2rem"
      }
  },
  linkButtonHome:{
      textDecoration: "none"
  }
}));
