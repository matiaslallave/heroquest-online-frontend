import { makeStyles } from "@material-ui/styles";
import WoodBg from '../../../../assets/wood.jpg';
import Card from '../../../../assets/card.png';

export const useStyles = makeStyles((theme) => ({
    cardFont: {
      color: "rgb(51, 0, 0)",
      [theme.breakpoints.down('sm')]: {
        fontSize: "0.98rem",
      }
    }, cardFontTitle: {
      color: "rgb(51, 0, 0)",
      [theme.breakpoints.down('sm')]: {
        fontSize: "2rem",
      }
    },
    root: {
      backgroundImage: `url(${WoodBg})`,
      width: "100%",
      height: "100vh",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      margin: '0px'
    },
    cardContainer: {
      backgroundImage: `url(${Card})`,
      height: "95vh",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    },
    cardContentContainer: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      height: "100vh"
    },
    cardBodyContainer: {
      position: 'absolute',
      top: '0',
      width: '80%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    cardImage: {
      width: '100%',
      borderRadius: "15px"
    },
    cardIlustration: {
      width: '100%',
      borderRadius: "15px",
      borderStyle: 'solid',
      borderColor: "rgb(51, 0, 0)",
    },
    linkValid: {
      textDecoration: 'none',
      color: '#A0865A',
      '&:hover': {
        textDecoration: 'underline',
        textDecorationColor: '#A0865A'
      }
    },
  }));