import { makeStyles } from "@material-ui/core";

export const useBoardStyle = (boardImg) => {
  const useStyle = makeStyles({
    container: {
      position: "relative",
      backgroundColor: "black",
    },
    board: {
      background: `black url(${boardImg}) no-repeat center center `,
      backgroundSize: "contain",
      width: "100%",
      height: "100vh",
      opacity: '0.6'
    },
    buttonPanel: {
      position: "absolute",
      bottom: "0",
      left: "0",
      display: "flex",
      zIndex: "1301", // Quiero que la botonera esté por encima del popover (modal que tiene z-index=1300)
    },
    dicesWindow: {
      position: "absolute",
      top: "50%",
      left: "50%",
    },
    boxSizePop: {
      maxWidth: "210px",
      padding: "1rem",
    },
    throwDicesBtn: {
      background:
        "linear-gradient(90deg, rgba(31,0,54,1) 0%, rgba(23,54,0,1) 95%)",
      color: "white",
      margin: "0.5rem 0",
    },
    popDicesContainer: {
      display: "flex",
      flexDirection: "column",
    },
    boxSizePopCharacterSheet: {
      padding: "1rem",
    },
    heroStamp: {
      width: "35px",
      border: "ridge gold",
    },
    disabledButton: {
      "&:disabled": {
        backgroundColor: "#DFCFA0"
      }
    }
  });

  return useStyle();
};
