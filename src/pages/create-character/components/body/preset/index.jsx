import { Grid, Typography, Button, Paper } from "@material-ui/core";
import StdCard from "../../../../../components/std-card";
import { useStyles } from "../style";
import React from "react";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { SERVER_URL_AUTH } from "../../../../../utils";

function Preset(props) {
  const [isLoading, setLoading] = useState(true);
  const [allPresetChars, setAllPresetChars] = useState([]);

  const classes = useStyles();

  const history = useHistory();

  const handleClickBack = props.handleClickBack;

  const handleCharClick = (char) => {
    sessionStorage.setItem("character", JSON.stringify(char));
    history.push(`/character_resume`);
  };

  useEffect(() => {
    fetch(`http://localhost:4567/character/preset/`)
      .then((r) => r.json())
      .then((chars) => {
        setAllPresetChars(chars);
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <Grid item xs={12} sm={12} lg={12} align="center">
          <Typography color="primary" variant="h2" align="center">
            Loading...
          </Typography>
        </Grid>
      ) : (
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
                Create character / Preset
              </Typography>
            </Grid>
            <Grid container>
              {allPresetChars.map((v) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={6}
                  align="center"
                  className={classes.margin}
                >
                  <StdCard
                    character={v}
                    title={v.name}
                    img={`${SERVER_URL_AUTH}${v.img}`}
                    handleClick={handleCharClick}
                  ></StdCard>
                </Grid>
              ))}
              <Grid item xs={12} sm={12} lg={12} align="center">
                <Button
                  color="secondary"
                  variant="contained"
                  size="large"
                  className={classes.margin}
                  onClick={handleClickBack}
                >
                  <Typography variant="h5">Back</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      )}
    </React.Fragment>
  );
}

export default Preset;
