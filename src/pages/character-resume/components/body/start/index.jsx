import { Grid, Typography, Button, Paper } from "@material-ui/core";
import { useStyles } from "../style";
import React from "react";
import CharacterSheet from "../../../../../components/character-sheet";
import { useTranslation } from "react-i18next";

function Start(props) {
  const classes = useStyles();
  const [t] = useTranslation("global");

  return (
    <React.Fragment>
      <Grid
        item
        xs={12}
        sm={12}
        lg={12}
        align="center"
        className={classes.margin}
      >
        <CharacterSheet character={props.character}></CharacterSheet>
      </Grid>

      <Grid item xs={12} sm={6} lg={6} align="center" className={classes.margin}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={props.handleClickSave}
        >
          <Typography variant="h5">{t("character-resume.savechar")}</Typography>
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} lg={6} align="center" className={classes.margin}>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          onClick={props.handleClickBack}
        >
          <Typography variant="h5">{t("character-resume.back")}</Typography>
        </Button>
      </Grid>
    </React.Fragment>
  );
}

export default Start;
