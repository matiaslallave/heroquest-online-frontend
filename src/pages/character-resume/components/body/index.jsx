import { Grid, Typography, Button } from "@material-ui/core";
import { useStyles } from "./style";
import React from "react";
import { useHistory } from "react-router";
import CharacterSheet from "../../../../components/character-sheet";

function Body(props) {
  const classes = useStyles();

  const history = useHistory();

  const handleClickBack = () => {
    history.push("/create_character");
  };

  return (
    <div className={classes.bodyContainer}>
      <Grid container>
        <Grid item xs={12} sm={12} lg={12} align="center">
          <Typography variant="h3" color="primary" className={classes.margin}>
            Character Resume
          </Typography>
        </Grid>
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
        <Grid item xs={12} sm={6} lg={6} align="center">
          <Button
            color="primary"
            variant="contained"
            size="large"
            className={classes.margin}
          >
            <Typography variant="h5">Save character</Typography>
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} lg={6} align="center">
          <Button
            color="secondary"
            variant="contained"
            size="large"
            className={classes.margin}
            onClick={handleClickBack}
          >
            <Typography variant="h5">Back to create character</Typography>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Body;
