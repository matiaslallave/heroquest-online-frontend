import React from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { useStyles } from "../style";
import CheckedIcon from "../../../../../assets/check.png";

function Saved(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container item xs={12} sm={12} lg={12} justifyContent="center">
        <Grid
          item
          xs={12}
          sm={6}
          lg={6}
          align="center"
          className={classes.margin}
        >
          <img alt="" src={CheckedIcon} className={classes.checkIcon}></img>
          <div>
            <Typography
              variant="h4"
              color="primary"
              className={classes.checkText}
            >
              CHARACTER SAVED!
            </Typography>
            <Typography
              variant="h5"
              color="primary"
              className={classes.checkText}
            >
              Now you can join a game, or back to create another character
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        lg={6}
        align="center"
        className={classes.margin}
      >
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={props.handleClickGame}
        >
          <Typography variant="h5">Join game</Typography>
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        lg={6}
        align="center"
        className={classes.margin}
      >
        <Button
          color="secondary"
          variant="contained"
          size="large"
          onClick={props.handleClickBack}
        >
          <Typography variant="h5">Back to create character</Typography>
        </Button>
      </Grid>
    </React.Fragment>
  );
}

export default Saved;
