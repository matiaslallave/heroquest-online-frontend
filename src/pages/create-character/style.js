import { makeStyles } from "@material-ui/core"
import BackGr1 from '../../assets/bg.png'


export const useStyles = makeStyles({
    container: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundImage: `url(${BackGr1})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }
});