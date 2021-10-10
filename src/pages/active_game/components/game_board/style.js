import { makeStyles } from "@material-ui/core";


export const useBoardStyle = (boardImg) => {
  const useStyle = makeStyles({
    board: {
      background: `black url(${boardImg}) no-repeat center center `,
      backgroundSize: "contain",
      width: "100%",
      height: "100vh",
    },
  });

  return useStyle();
};
