import { Typography, Avatar, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Logo from "../../assets/hqologo.png";
import "./style.css";
import { Link } from "react-router-dom";
import Skull from "../../assets/blckskull.jpg";

const useStyles = makeStyles({
  skull: {
    marginRight: "0.8rem",
  },
});

function Header() {
  const classes = useStyles();

  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="" className="logo"></img>
      </Link>
      <Typography color="primary" variant="h3">
        HeroQuest Online
      </Typography>
      <Link className="nolink">
        <Badge
          className={classes.skull}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          color="primary"
          badgeContent=" "
          variant="dot"
        >
          <Avatar alt="" src={Skull}></Avatar>
        </Badge>
        <Typography color="primary">Inicia sesión</Typography>
      </Link>
    </div>
  );
}

export default Header;
