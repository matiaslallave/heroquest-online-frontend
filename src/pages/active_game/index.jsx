import React, { useEffect, useState } from "react";
import PlayerBoard from "./components/player_board";
import MasterBoard from "./components/master_board";
import { Grid, Typography } from "@material-ui/core";
import { useParams } from "react-router";
import { useStyles } from "./style";
import GameBoard from "./components/game_board";

function ActiveGame() {
  const { gameCode } = useParams();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [playerType, setPlayerType] = useState();
  const [userData, setUserData] = useState();
  const [gameData, setGameData] = useState();
  const [monstersData, setMonstersData] = useState();
  const [stamps, addStamps] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("sessionToken")}`,
      },
    };
    const getUserInfo = async () => {
      const r = await fetch(`http://localhost:4567/user/`, options);
      const userInfo = await r.json();
      setUserData(userInfo);
      return userInfo;
    };

    const getCharacterInfo = async () => {
      const r = await fetch(`http://localhost:4567/character/preset/`, options);
      const charsInfo = await r.json();
      return charsInfo;
    };

    const getGame = async () => {
      const r = await fetch(`http://localhost:4567/game/${gameCode}/`, options);
      if (r.status === 403) {
        // set forbidden status and update UI
        throw new Error("Prohibido");
      } else {
        const gameInfo = await r.json();
        setGameData(gameInfo);

        return gameInfo;
      }
    };

    const getMonsterInfo = async () => {
      const r = await fetch(`http://localhost:4567/monster/`, options);
      const monsterInfo = await r.json();
      return monsterInfo;
    };

    getUserInfo().then((userInfo) => {
      getCharacterInfo().then((characters) => {
        getMonsterInfo().then((monstersInfo) => {
          setMonstersData(monstersInfo);
          getGame()
            .then((gameInfo) => {
              setPlayerType(
                userInfo.email === gameInfo.master ? "master" : "player"
              );
              const playerCharactersStamps = gameInfo.players.map((w) => {
                const character = characters.find(
                  (c) => c.name === w.activeCharacter
                );
                return {
                  img: "http://localhost:4567" + character.stamp,
                  position: w.position,
                };
              });

              const enemiesStamps = gameInfo.enemies.map((w) => {
                const monster = monstersInfo.find((c) => c.name === w.name);
                return {
                  img: "http://localhost:4567" + monster.stamp,
                  position: w.position,
                };
              });

              addStamps((previousStamps) => [
                ...previousStamps,
                ...playerCharactersStamps,
                ...enemiesStamps,
              ]);
            })
            .finally(() => {
              setIsLoading(false);
            });
        });
      });
    });
  }, []);

  const handleAddStamp = (stamp) => {
    addStamps(previousStamps => [...previousStamps, stamp]);
  }

  return (
    <React.Fragment>
      {isLoading ? (
        <Grid item xs={12} sm={12} lg={12} align="center">
          <Typography color="primary" variant="h2" align="center">
            Loading...
          </Typography>
        </Grid>
      ) : (
        <div className={classes.container}>
          {/* <GameBoard stamps={stamps} game={gameData}></GameBoard> */}
          {playerType === "master" ? (
            <MasterBoard game={gameData} monsters={monstersData}></MasterBoard>
          ) : (
            <PlayerBoard player={userData} game={gameData} monsters={monstersData}></PlayerBoard>
          )}
        </div>
      )}
    </React.Fragment>
  );
}

export default ActiveGame;
