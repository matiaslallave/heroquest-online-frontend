import { Grid, Typography, Button } from "@material-ui/core";
import StdCard from "../../../../../components/std-card";
import CustomHero from "../../../../../assets/custom.jpg";
import { useStyles } from "./style";
import React from "react";

function Custom(props) {
  const classes = useStyles();

  const handleClickBack = props.handleClickBack;

  return (
    <Grid container>
      <Grid item xs={12} sm={12} lg={12} align="center">
        <Typography variant="h3" color="primary" className={classes.margin}>
          Create Character
        </Typography>
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
        ></StdCard>
      </Grid>
      <Grid item xs={12} sm={12} lg={12} align="center">
        <Button
          color="primary"
          variant="contained"
          size="large"
          className={classes.margin}
          onClick={handleClickBack}
        >
          <Typography variant="h5">Back</Typography>
        </Button>
      </Grid>
    </Grid>
  );
}

export default Custom;
