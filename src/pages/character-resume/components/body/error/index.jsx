import React from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { useStyles } from "../style";
import ErrorIcon from "../../../../../assets/error.png";

function Error(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container item xs={12} sm={12} lg={12} justifyContent="center">
        <Grid item xs={12} sm={6} lg={6} align="center" className={classes.margin}>
            <img alt="" src={ErrorIcon} className={classes.checkIcon}></img>
            <div>
              <Typography
                variant="h4"
                color="primary"
                className={classes.checkText}
              >
                ERROR!
              </Typography>
              <Typography
                variant="h5"
                color="primary"
                className={classes.checkText}
              >
                You already have a character with that name, please select
                another name
              </Typography>
            </div>
        </Grid>
      </Grid>
      <Grid item xs={12} align="center" className={classes.margin}>
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

export default Error;
