import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  cellData: {
    backgroundColor: "white",
  },
  cellTitle: {
    backgroundColor: "#DFCFA0",
    padding: "0.5rem",
    textAlign: "center",
  },
  cell: {
    padding: "0.5rem",
    textAlign: "center",
    minWidth: "1rem",
  },
  cellWpnArm: {
    padding: "0.5rem",
    textAlign: "center",
    minWidth: "5rem",
  },
  cellEquip: {
    padding: "0.5rem",
    textAlign: "center",
    minWidth: "1rem",
    backgroundColor: "white"
  },
  tableContainer:{
      minWidth: "100%"
  },
  portrait:{
      width:"100%",
      height:"437px",
      borderRadius: "10px",
    //   margin:"0.3rem"
  },
  mainContainer: {
      display:"flex",
      justifyContent: "center"
  },
  portraitContainer: {
      marginRight: "0.2rem"
  }
});
