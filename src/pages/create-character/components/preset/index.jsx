import { Grid, Typography, Button } from "@material-ui/core";
import StdCard from "../../../../components/std-card";
import { useStyles } from "./style";
import React from "react";
import Barbarian from "../../../../assets/heroquest_barbarian.jpg";
import Elf from "../../../../assets/heroquest_elf.jpg";
import Mage from "../../../../assets/heroquest_wizard.jpg";
import Dwarf from "../../../../assets/heroquest_dwarf1.jpg";
import { useHistory } from "react-router";

function Preset(props) {
  const classes = useStyles();

  const history = useHistory();

  const handleClickBack = props.handleClickBack;

  const handleClickRogar = () => {
    history.push("/character_resume?char=Rogar");
  }

  const handleClickLadrill = () => {
    history.push("/character_resume?char=Ladrill");
  }

  const handleClickTelor = () => {
    history.push("/character_resume?char=Telor");
  }

  const handleClickDurgin = () => {
    history.push("/character_resume?char=Durgin");
  }
  

  return (
          <Grid container>
            <Grid item xs={12} sm={12} lg={12} align="center">
              <Typography
                variant="h3"
                color="primary"
                className={classes.margin}
              >
                {"Create Character / PRESET"}
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
              <StdCard title="Rogar" img={Barbarian} handleClick={handleClickRogar}></StdCard>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={6}
              align="center"
              className={classes.margin}
            >
              <StdCard title="Ladrill" img={Elf} handleClick={handleClickLadrill}></StdCard>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={6}
              align="center"
              className={classes.margin}
            >
              <StdCard title="Telor" img={Mage} handleClick={handleClickTelor}></StdCard>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={6}
              align="center"
              className={classes.margin}
            >
              <StdCard title="Durgin" img={Dwarf} handleClick={handleClickDurgin}></StdCard>
            </Grid>
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
  );
}

export default Preset;
