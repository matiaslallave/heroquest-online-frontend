import { useBoardStyle } from "./style";
import {
  Button,
  Popover,
  Box,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { useHistory } from "react-router";
import DicesWindow from "../../../../components/dices-window";
import { D12 } from "../../../../utils";
import { SERVER_URL_AUTH } from "../../../../utils";
import Stamp from "../stamp";
import CharacterSheet from "../../../../components/character-sheet";
import MiniCharacterSheet from "../mini-character-sheet";

const defaultState = {
  showHeroStamp: false,
  showChat: false,
  showCharacters: false,
  showDices: false,
};

function PlayerBoard(props) {
  console.log(props.game.boardImg);
  const classes = useBoardStyle(`${SERVER_URL_AUTH}${props.game.boardImg}`);

  const [menuState, changeMenuState] = useState(defaultState);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openThrowWindow, setOpenThrowWindow] = useState(false);
  const [dices, setDices] = useState([]);
  const [currentStamp, setCurrentStamp] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);

  const history = useHistory();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    switch (event.currentTarget.name) {
      case "heroStamp":
        changeMenuState({ ...defaultState, showHeroStamp: true });
        break;
      case "characters":
        changeMenuState({ ...defaultState, showCharacters: true });
        break;
      case "dices":
        changeMenuState({ ...defaultState, showDices: true });
        break;
      case "chat":
        changeMenuState({ ...defaultState, showChat: true });
        break;
      default:
        break;
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    changeMenuState(defaultState);
  };

  const handleClickExit = () => {
    history.push("/");
  };

  const handleThrowDices = (e) => {
    e.preventDefault();

    let auxDices = [];

    for (let i = 0; i < e.target.diceNumber.value; i++) {
      const dice = D12();
      auxDices.push(dice);
    }

    setDices(auxDices);

    setOpenThrowWindow(true);
  };

  const onFinishRoll = () => {
    setOpenThrowWindow(false);
  };

  const handleClickStamp = (e) => {
    setCurrentStamp((stamps) => [
      ...stamps,
      { img: e.target.attributes.src.value },
    ]);
    setDisabledButton(true);
  };

  const handleStampStop = (e, a) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("sessionToken")}`,
      },
      body: JSON.stringify({
        position: { x: a.x, y: a.y },
      }),
    };
    fetch(
      `http://localhost:4567/game/${props.game.gameCode}/hero_stamp_position`,
      options
    ).then((r) => {
      r.status === 200 ? console.log("OK") : console.log("KO");
    });
  };

  const handleSelectCharacter = (e) => {
    setSelectedCharacter(
      props.player.characters.find(
        (v) => v.name.toLowerCase() === e.target.innerHTML.toLowerCase()
      )
    );
    const options = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("sessionToken")}`,
      },
      body: JSON.stringify({
        characterName: e.target.innerHTML,
      }),
    };
    fetch(
      `http://localhost:4567/game/${props.game.gameCode}/active_char`,
      options
    ).then((r) => {
      r.status === 200 ? console.log("OK") : console.log("KO");
    });
  };

  useEffect(() => {
    const player = props.game.players.find(
      (w) => w.user === props.player.email
    );
    const activeCharacter = props.player.characters.find(
      (v) => v.name === player.activeCharacter
    );
    setSelectedCharacter(activeCharacter);
    const enemiesStamps = props.game.enemies.map((w) => {
      const monster = props.monsters.find((c) => c.name === w.name);
      return {
        img: "http://localhost:4567" + monster.stamp,
        position: w.position,
      };
    });
    setCurrentStamp((stamps) => [
      ...stamps,
      {
        img: "http://localhost:4567" + activeCharacter.stamp,
        position: player.position,
        dragable: true,
      },
      ...enemiesStamps
    ]);
  }, [props.game, props.player]);
  return (
    <div className={classes.container}>
      {currentStamp.map((e, i) => (
        <Stamp
          dragable={e.dragable}
          key={i}
          stampImg={e.img}
          handleStampStop={handleStampStop}
          position={e.position}
        ></Stamp>
      ))}

      <div className={classes.board}></div>

      {openThrowWindow ? (
        <DicesWindow dices={dices} onFinishRoll={onFinishRoll}></DicesWindow>
      ) : (
        ""
      )}

      <Box className={classes.buttonPanel}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          name="heroStamp"
          disabled={disabledButton}
          className={classes.disabledButton}
        >
          Hero stamps
        </Button>
        <Popover
          open={menuState.showHeroStamp}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Box className={classes.boxSizePop} elevation={3}>
            <Grid container wrap="wrap" spacing={3}>
              {props.player.characters.map((v, i) => (
                <Grid item>
                  <img
                    key={i}
                    alt=""
                    className={classes.heroStamp}
                    src={`${SERVER_URL_AUTH}${v.stamp}`}
                    onClick={handleClickStamp}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Popover>
        <Button
          variant="contained"
          color="primary"
          className={classes.chatBtn}
          onClick={handleClick}
          name="characters"
        >
          Character Sheet
        </Button>
        <Popover
          open={menuState.showCharacters}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Box className={classes.boxSizePopCharacterSheet} elevation={3}>
            {selectedCharacter === "" ? (
              <React.Fragment>
                {props.player.characters.map((c, i) => (
                  <Button key={i} onClick={handleSelectCharacter}>
                    {c.name}
                  </Button>
                ))}
              </React.Fragment>
            ) : (
              <MiniCharacterSheet
                character={selectedCharacter}
              ></MiniCharacterSheet>
            )}
          </Box>
        </Popover>
        <Button
          variant="contained"
          color="primary"
          className={classes.chatBtn}
          onClick={handleClick}
          name="dices"
        >
          Throw Dices
        </Button>
        <Popover
          open={menuState.showDices}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Box className={classes.boxSizePop} elevation={3}>
            <form onSubmit={handleThrowDices}>
              <TextField
                name="diceNumber"
                type="number"
                placeholder="Number of D12"
                InputProps={{
                  inputProps: {
                    min: 1,
                  },
                }}
                defaultValue="1"
              ></TextField>
              <Button fullWidth type="submit" className={classes.throwDicesBtn}>
                Throw!
              </Button>
            </form>
            {dices.length === 0 ? (
              ""
            ) : dices.length === 1 ? (
              <Typography>{`Last result: ${dices[0]}`}</Typography>
            ) : (
              <Typography>
                {`Last result: ${dices.join("/")} (Σ${dices.reduce(
                  (a, b) => a + b,
                  0
                )})`}
              </Typography>
            )}
          </Box>
        </Popover>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          name="chat"
        >
          Chat
        </Button>
        <Popover
          open={menuState.showChat}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Box className={classes.boxSizePop} elevation={3}>
            CHAT!!
          </Box>
        </Popover>
        <Button variant="contained" color="secondary" onClick={handleClickExit}>
          Exit game
        </Button>
      </Box>
    </div>
  );
}

export default PlayerBoard;
