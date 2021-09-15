import { makeStyles } from "@material-ui/core"
import BackGr3 from '../../assets/bg3.png'


export const useStyles = makeStyles({
    container: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundImage: `url(${BackGr3})`,
        backgroundRepeat: " repeat",
        backgroundSize: "auto",
      }
});