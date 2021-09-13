import { useStyles } from "./style";
import React, { useState } from "react";
import Preset from "../preset";
import Custom from "../custom";
import Start from "../start";

function Body() {
  const classes = useStyles();
  const [preset, setPreset] = useState(false);
  const [custom, setCustom] = useState(false);

  const handleClickPreset = () => {
    setCustom(false);
    setPreset(true);
  };

  const handleClickCustom = () => {
    setPreset(false);
    setCustom(true);
  };

  const handleClickBack = () => {
    setPreset(false);
    setCustom(false);
  };

  return (
    <React.Fragment>
      {preset ? (
        <div className={classes.bodyContainer}>
          <Preset handleClickBack={handleClickBack}></Preset>
        </div>
      ) : custom ? (
        <div className={classes.bodyContainer}>
          <Custom handleClickBack={handleClickBack}></Custom>
        </div>
      ) : (
        <div className={classes.bodyContainer}>
          <Start handleClickPreset={handleClickPreset} handleClickCustom={handleClickCustom}></Start>
        </div>
      )}
    </React.Fragment>
  );
}

export default Body;
