import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { useHistory } from "react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Body() {
  const classes = useStyles();
  const history = useHistory();
  const [selectError, setSelectError] = useState(false);
  const [t] = useTranslation("global");

  const handleClickBack = () => {
    history.push("/");
  };

  const handleJoinSubmit = (e) => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      const options = {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("sessionToken")}`,
        },
        body: JSON.stringify({
          gameCode: e.target.gameCode.value,
        }),
      };
      fetch("http://localhost:4567/game", options).then((r) => {
        r.status === 200 ? console.log("OK") : console.log("KO");
      });
      history.push(`/active_game/${e.target.gameCode.value}`);
    } else {
      setSelectError(true);
    }
  };

  const handleChange = (e) => {
    setSelectError(false);
  };

  return (
    <Paper elevation={3} className={classes.baseTextBlock}>
      <Grid container justifyContent="center" alignContent="center">
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="h3" color="primary">
            {t("join-game.title")}
          </Typography>
        </Grid>
        <div className={classes.formBackgr}>
          <Typography
            variant="h5"
            color="secondary"
            className={classes.marginForm}
          >
            {t("join-game.entercode")}
          </Typography>
          <form
            onSubmit={handleJoinSubmit}
            autoComplete="off"
            noValidate
            className={classes.formCont}
          >
            <TextField
              error={selectError}
              helperText={selectError ? t("join-game.invalid") : ""}
              name="gameCode"
              label={t("join-game.gc")}
              color="secondary"
              type="text"
              variant="outlined"
              inputProps={{ required: true, pattern: ".{8}" }} //minLength: 8, required: true, maxLength:8,
              className={classes.marginForm}
              onChange={handleChange}
            ></TextField>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              className={classes.marginForm}
            >
              {t("join-game.join")}
            </Button>
          </form>
        </div>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            onClick={handleClickBack}
          >
            <Typography variant="h5">{t("join-game.back")}</Typography>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Body;
