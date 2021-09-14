import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { useStyles } from "./style";
import { useHistory } from "react-router";

function Body() {
  const classes = useStyles();
  const history = useHistory();

  const numPlayersArr = [1, 2, 3, 4];
  const [numPlayers, setNumPlayers] = useState(1);

  const handleChange = (event) => {
    setNumPlayers(event.target.value);
  };

  const handleClickBack = () => {
    history.push("/");
  };

  const handleGameSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem("sessionToken")}`,
      },
      body: JSON.stringify({
        gameName: e.target.gameName.value, 
        maxPlayers: e.target.maxPlayers.value,
      }),
    };
    fetch("http://localhost:4567/game", options)
            .then((r) => {
              r.status === 200 ? console.log("ok") : console.log("KO") 
            })
  }

  return (
    <Paper elevation={3} className={classes.baseTextBlock}>
      <Grid container justifyContent="center" alignContent="center">
        <Grid item xs={12} sm={12} lg={12} align="center">
          <Typography variant="h3" color="primary" className={classes.margin}>
            Create Game
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={9}
          lg={9}
          alignItems="center"
          justifyContent="center"
          className={classes.formBackgr}
        >
          <Grid item xs={12} sm={6} lg={4}>
            <Typography
              variant="h5"
              color="secondary"
              className={classes.margin}
            >
              Choose options:
            </Typography>
          </Grid>

          <form onSubmit={handleGameSubmit}>
            <Grid item xs={12} sm={6} lg={4}>
              <TextField
                name="gameName"
                label="Game name"
                color="secondary"
                type="text"
                variant="outlined"
                className={classes.margin}
              ></TextField>
              <TextField
                name="maxPlayers"
                select
                label="Max. number of players"
                color="secondary"
                value={numPlayers}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                helperText="Warning: You cannot change this value once the game starts"
                variant="outlined"
                className={classes.margin}
              >
                {numPlayersArr.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.margin}
              >
                Submit game
              </Button>
            </Grid>
          </form>
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
    </Paper>
  );
}

export default Body;
