import { makeStyles } from "@material-ui/core"
import BackGr4 from '../../assets/bg4.png'


export const useStyles = makeStyles({
    container: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundImage: `url(${BackGr4})`,
        backgroundRepeat: " repeat",
        backgroundSize: "auto",
      }
});