import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  margin: {
    margin: "2rem 0",
  },
  baseTextBlock: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    padding: "0.5rem",
    alignItems: "center",
    margin: "3rem",
    justifyContent: "center",
    flexDirection: "column",
  },
  formBackgr: {
    backgroundColor: "rgb(224, 224, 224)",
    borderRadius: "10px",
    borderColor: "#A0865A",
    borderStyle: "solid",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  marginForm: {
    margin: "2rem",
  },
  formCont: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  linkValid: {
    textDecoration: 'none',
    color: '#A0865A',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: '#A0865A'
    }
  }
});
