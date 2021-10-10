import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  cellData: {
    backgroundColor: "white",
  },
  cellTitle: {
    backgroundColor: "#DFCFA0",
    padding: "0.3rem",
    textAlign: "center",
  },
  cell: {
    padding: "0.3rem",
    textAlign: "center",
    minWidth: "1.7rem",
  },
  cellWpnArm: {
    padding: "0.3rem",
    textAlign: "center",
    minWidth: "5rem",
    minHeight: "100px"
  },
  cellEquip: {
    padding: "0.3rem",
    textAlign: "center",
    minWidth: "5rem",
    backgroundColor: "white"
  },
  tableContainer:{
      minWidth: "100%"
  },
  portrait:{
      width:"270px",
      borderRadius: "10px",
      marginTop:"0.3rem"
  },
  mainContainer: {
      display:"flex",
      justifyContent: "center",
      flexDirection:"column"
  },
  portraitContainer: {
      marginRight: "0.3rem"
  }
});
