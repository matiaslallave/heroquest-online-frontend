import { makeStyles } from "@material-ui/core"
import BackGr2 from '../../assets/bg22.png'


export const useStyles = makeStyles({
    container: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundImage: `url(${BackGr2})`,
        backgroundRepeat: " repeat",
        backgroundSize: "auto",
      }
});