import { Grid, Typography, Button, Paper } from "@material-ui/core";
import StdCard from "../../../../../components/std-card";
import PreselectHero from "../../../../../assets/preselect.jpg";
import CustomHero from "../../../../../assets/custom.jpg";
import { useStyles } from "../style";
import React from "react";
import { useHistory } from "react-router";

function Start(props) {
  const classes = useStyles();

  const history = useHistory();

  const handleClickPreset = props.handleClickPreset;

  const handleClickCustom = props.handleClickCustom;

  const handleClickBack = () => {
    history.push("/");
  };

  return (
    <React.Fragment>
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
              Create character
            </Typography>
          </Grid>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              lg={6}
              align="center"
              className={classes.margin}
            >
              <StdCard
                title="Preset"
                img={PreselectHero}
                handleClick={handleClickPreset}
              ></StdCard>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={6}
              align="center"
              className={classes.margin}
            >
              <StdCard
                title="Custom"
                img={CustomHero}
                handleClick={handleClickCustom}
              ></StdCard>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              align="center"
              className={classes.margin}
            >
              <Button
                color="secondary"
                variant="contained"
                size="large"
                onClick={handleClickBack}
              >
                <Typography variant="h5">Back</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}

export default Start;
