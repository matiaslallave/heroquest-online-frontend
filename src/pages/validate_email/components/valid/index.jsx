import { Grid, Typography, Container } from "@material-ui/core";
import ImgValid from "../../../../assets/valid.jpg";
import { useStyles } from "./style.js";
import { Link } from "react-router-dom";
import Card from '../../../../assets/card.png';

function Valid() {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justifyContent="center" spacing={3} className={classes.root}>
      <Grid item xs={12} sm={8} md={6} lg={4} className={classes.cardContentContainer}>
        <img alt="" src={Card} className={classes.cardImage} />
        <Container className={classes.cardBodyContainer}>
          <Typography className={classes.cardFontTitle} variant="h3">¡CONSEGUIDO!</Typography>
          <img alt="" src={ImgValid} className={classes.cardIlustration}></img>
          <Typography className={classes.cardFont} variant="h6">
            La verificación de usuario se ha completado con éxito. ¡La
            gloria te espera!&nbsp;
            <Link to="/login" className={classes.linkValid}>
              Inicia sesión
            </Link>&nbsp;
            para comenzar tu aventura
          </Typography>

        </Container>
      </Grid>
    </Grid>
    // V2 background image
    // <Grid container alignItems="center" justifyContent="center" className={classes.root}>
    //   <Grid container alignItems="center" direction="column" justifyContent="center" className={classes.cardContainer}>
    //     <Grid item xs={12} sm={6} md={4} className={classes.cardContentContainer}>
    //       <Typography className={classes.fontColor} variant="h1">¡CONSEGUIDO!</Typography>
    //       <img alt="" src={ImgValid} className={classes.cardImage}></img>
    //       <Typography className={classes.fontColor} variant="subtitle1">
    //         La verificación de usuario se ha completado con éxito. ¡La
    //         gloria te espera!&nbsp;
    //         <Link to="/login" className="link-valid">
    //           Inicia sesión
    //         </Link>&nbsp;
    //         para comenzar tu aventura
    //       </Typography>
    //     </Grid>
    //   </Grid>
    // </Grid>
    // v1 background image
    // <Grid container direction="column" justifyContent="center">
    //   <div className="container">
    //     <Grid item xs={12} sm={8} lg={4}>
    //       <div className="card">
    //         <div className="card-header">
    //           <Typography className={classes.fontColor} variant="h3">
    //             ¡CONSEGUIDO!
    //           </Typography>

    //           <img alt="" src={ImgValid} className="image"></img>
    //         </div>
    //         <div className="card-body">
    //           <Typography className={classes.fontColor} variant="h6">
    //             La verificación de usuario se ha completado con éxito. ¡La
    //             gloria te espera!{" "}
    //             <Link to="/login" className="link-valid">
    //               Inicia sesión
    //             </Link>{" "}
    //             para comenzar tu aventura
    //           </Typography>
    //         </div>
    //       </div>
    //     </Grid>
    //   </div>
    // </Grid>
  );
}

export default Valid;
