import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style";



function StdCard(props) {
  const classes = useStyles();

  const handleClick = props.handleClick;

  return (
    <Card className={classes.cardContainer} onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
        />
        <CardContent style={{backgroundColor: "#DFCFA0"}}>
          <Typography gutterBottom variant="h5">
            {props.title}
          </Typography>
          <Typography variant="body2">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default StdCard;
