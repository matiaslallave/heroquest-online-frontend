import { Grid, Typography, Button } from "@material-ui/core";
import { useStyles } from "./style";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


function Body() {
  const classes = useStyles();
  const [t] = useTranslation("global");
  return (
    <Grid container alignItems="center" className={classes.bodyContainer}>
      <Grid item xs={12} sm={12} lg={12} align="center">
        <Link to="/create_character" className={classes.linkButtonHome}>
          <Button
            color="primary"
            variant="contained"
            size="large"
            className={classes.buttonHome}
          >
            <Typography variant="h3">{t("home.cc")}</Typography>
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} lg={6} align="center">
      <Link to="/join_game" className={classes.linkButtonHome}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          className={classes.buttonHome}
        >
          <Typography variant="h3">{t("home.jg")}</Typography>
        </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} lg={6} align="center">
      <Link to="/create_game" className={classes.linkButtonHome}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          className={classes.buttonHome}
        >
          <Typography variant="h3">{t("home.cg")}</Typography>
        </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Body;
