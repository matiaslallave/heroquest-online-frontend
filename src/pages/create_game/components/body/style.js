import { makeStyles } from "@material-ui/core";
import { Height } from "@material-ui/icons";

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
    justifyContent: "center"
  },
  formSubCont: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  inputFormat: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: "2rem"
  },
  fileImg: {
    width:"150px",
    height: "100px",
    borderRadius: "7px",
    margin: "1rem"
  },
  marginInput: {
    margin: "1rem"
  },
  radioBlock: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center"
  }
});
