import React from "react";
import Stamp from "../stamp";
import { useBoardStyle } from "./style";
import { SERVER_URL_AUTH } from "../../../../utils";

function GameBoard(props) {
  const classes = useBoardStyle(`${SERVER_URL_AUTH}${props.game.boardImg}`);

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

  return (
    <React.Fragment>
      {props.stamps.map((e, i) => (
        <Stamp
          key={i}
          stampImg={e.img}
          handleStampStop={handleStampStop}
          position={e.position}
        ></Stamp>
      ))}

      <div className={classes.board}></div>
    </React.Fragment>
  );
}

export default GameBoard;
