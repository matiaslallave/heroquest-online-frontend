import { Grid, Typography, Paper } from "@material-ui/core";
import { useStyles } from "./style";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Error from "./error";
import Saved from "./saved";
import Start from "./start";
import { useTranslation } from "react-i18next";

function Body(props) {
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState(false);
  const [t] = useTranslation("global");
  const classes = useStyles();

  const history = useHistory();

  const handleClickBack = () => {
    history.push("/create_character");
  };

  const handleClickSave = () => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem("sessionToken")}`,
      },
      body: JSON.stringify({ character: props.character }),
    };
    fetch("http://localhost:4567/user", options).then((r) => {
      if (r.status === 409) {
        setError(true);
      } else {
        setIsSaved(true);
      }
    });
  };

  const handleClickGame = () => {
    history.push("/create_game");
  };

  return (
    <div className={classes.bodyContainer}>
      <Paper elevation={3} className={classes.baseTextBlock}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            align="center"
            className={classes.margin}
          >
            <Typography variant="h3" color="primary">
              {t("character-resume.title")}
            </Typography>
          </Grid>
          {error ? (
            <Error handleClickBack={handleClickBack}></Error>
          ) : isSaved ? (
            <Saved
              handleClickBack={handleClickBack}
              handleClickGame={handleClickGame}
            ></Saved>
          ) : (
            <Start
              handleClickBack={handleClickBack}
              handleClickSave={handleClickSave}
              character={props.character}
            ></Start>
          )}
        </Grid>
      </Paper>
    </div>
  );
}

export default Body;
