import Draggable from "react-draggable";
import { useStyles } from "./style";

function Stamp(props) {
  const classes = useStyles();
  const position =
    props.position !== undefined ? props.position : { x: 46.3, y: 27 };

  return (
    // Esto son numeros magicos para la resolución 1024

    <Draggable
      grid={[36.2, 35.9]}
      onStop={props.handleStampStop}
      defaultPosition={{ x: position.x, y: position.y }}
    >
      <img
        alt=""
        className={classes.heroStamp}
        src={`${props.stampImg}`}
        style={{ position: "absolute" }}
      />
    </Draggable>
  );
}

export default Stamp;
