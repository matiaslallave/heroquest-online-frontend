import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";

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
            {t("cookies.title")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="body1" color="primary">
            {t("cookies.body")}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            onClick={handleClickBack}
          >
            <Typography variant="h5">{t("cookies.back")}</Typography>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Body;
