import { Grid, Typography, Button } from "@material-ui/core";
import { useStyles } from "./style";
import { Link } from "react-router-dom";

function Body() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.bodyContainer}>
      <Grid item xs={12} sm={12} lg={12} align="center">
        <Link to="/create_character" className={classes.linkButtonHome}>
          <Button
            color="primary"
            variant="contained"
            size="large"
            className={classes.buttonHome}
          >
            <Typography variant="h3">Create character</Typography>
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} lg={6} align="center">
        <Button
          color="primary"
          variant="contained"
          size="large"
          className={classes.buttonHome}
        >
          <Typography variant="h3">Join game</Typography>
        </Button>
      </Grid>
      <Grid item xs={12} sm={12} lg={6} align="center">
      <Link to="/create_game" className={classes.linkButtonHome}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          className={classes.buttonHome}
        >
          <Typography variant="h3">Create Game</Typography>
        </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Body;
