import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./style";

function Body() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} sm={12} lg={12} align="center">
        <Typography variant="h3" color="primary" className={classes.margin}>
          Create Game
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Body;
