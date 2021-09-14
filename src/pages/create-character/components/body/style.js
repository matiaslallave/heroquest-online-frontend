import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  margin: {
      margin: "2rem 0"
  },
  baseTextBlock: {
    backgroundColor:"rgba(0, 0, 0, 0.4)",
    display:"flex",
    padding:"1.5rem",
    alignItems:"center",
    margin:"3rem",
    justifyContent: "center",
    flexDirection:"column"
  },
}));
