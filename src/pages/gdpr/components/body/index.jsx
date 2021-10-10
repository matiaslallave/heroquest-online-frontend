import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Body() {
  const classes = useStyles();
  const history = useHistory();
  const [t] = useTranslation("global");

  const handleClickBack = () => {
    history.push("/");
  };

  return (
    <Paper elevation={3} className={classes.baseTextBlock}>
      <Grid container justifyContent="center" alignContent="center">
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="h3" color="primary">
            {t("gdpr.title")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="h5" color="primary">
            {t("gdpr.whowe")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.whowebody")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="h5" color="primary">
            {t("gdpr.whatwhy")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.whatwhybody1")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.whatwhybody2")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="h5" color="primary">
            {t("gdpr.coment")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.comentbody1")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.comentbody2")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="h5" color="primary">
            {t("gdpr.media")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.mediabody")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="h5" color="primary">
            {t("gdpr.contact")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.contactbody1")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.contactbody2")}
            <a
              className={classes.linkValid}
              href="mailto:heroquestonline.matdev@gmail.com"
            >
              heroquestonline.matdev@gmail.com
            </a>
            {t("gdpr.contactbody3")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="h5" color="primary">
            {t("gdpr.cookies")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.cookiesbody1")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.cookiesbody2")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.cookiesbody3")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.cookiesbody4")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="h5" color="primary">
            {t("gdpr.embedded")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.embeddedbody1")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.embeddedbody2")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="h5" color="primary">
            {t("gdpr.analytics")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.analyticsbody1")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.analyticsbody2")}
            <a
              className={classes.linkValid}
              href="mailto:heroquestonline.matdev@gmail.com"
            >
              heroquestonline.matdev@gmail.com
            </a>
            {t("gdpr.analyticsbody3")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="h6" color="primary">
            {t("gdpr.howlong")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.howlongbody")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="h6" color="primary">
            {t("gdpr.whatrights")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.whatrightsbody1")}
            <a
              className={classes.linkValid}
              href="https://mp.2mp.es/politica-privacidad/darse-de-baja-de-datos-personales/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("gdpr.whatrightslink")}
            </a>
            {t("gdpr.whatrightsbody2")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="h6" color="primary">
            {t("gdpr.wherewe")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.wherewebody")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="h6" color="primary">
            {t("gdpr.contactinfo")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            Matías Lallave
          </Typography>
          <Typography variant="body1" color="primary">
            {t("gdpr.address")}C/ De la Piruleta
          </Typography>
          <Typography variant="body1" color="primary">
            {t("gdpr.city")}Gominola
          </Typography>
          <Typography variant="body1" color="primary">
            {t("gdpr.country")}
          </Typography>
          <Typography variant="body1" color="primary">
            {t("gdpr.phone")}+34 666 666 666
          </Typography>
          <Typography variant="body1" color="primary">
            <a
              className={classes.linkValid}
              href="mailto:heroquestonline.matdev@gmail.com"
            >
              heroquestonline.matdev@gmail.com
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="h5" color="primary">
            {t("gdpr.howwe")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.howwebody1")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("gdpr.howwebody2")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            onClick={handleClickBack}
          >
            <Typography variant="h5">{t("gdpr.back")}</Typography>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Body;
