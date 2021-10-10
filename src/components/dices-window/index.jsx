import React, { Fragment, useEffect, useState } from "react";
import { Dialog } from "@material-ui/core";
import Dices3d, { DICE_TYPES } from "../../libs/react-dice-3d";
import ReactAudioPlayer from "react-audio-player";
import DICEUP from "../../assets/DICEUP.mp3";

function DicesWindow(props) {
  const [openDialog, setOpenDialog] = useState(false);

  const DICE_COLOR = "#1F0036";
  const DICE_COLOR_ALT = "#173600";
  const FONT_COLOR = "#F0F0F0";

  useEffect(() => {
    setOpenDialog(true);
    setTimeout(() => {
      setOpenDialog(false);
      props.onFinishRoll();
    }, 3000);
  }, []);

  return (
    <Fragment>
      <Dialog open={openDialog} fullWidth>
        {openDialog ? (
          <Fragment>
            <Dices3d
              dices={props.dices.map((v) => {
                return {
                  type: DICE_TYPES.D12,
                  backColor:
                    Math.floor(Math.random() * 10) % 2 === 0
                      ? DICE_COLOR
                      : DICE_COLOR_ALT,
                  fontColor: FONT_COLOR,
                  value: v,
                };
              })}
            />
            <ReactAudioPlayer
              autoPlay
              source
              src={DICEUP}
              type="audio/mpeg"
            ></ReactAudioPlayer>
          </Fragment>
        ) : (
          ""
        )}
      </Dialog>
    </Fragment>
  );
}

export default DicesWindow;
