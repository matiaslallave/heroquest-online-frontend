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
  slash: {
    marginLeft: "0.3rem",
    marginRight: "0.3rem",
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
      <div className="login-register">
        <Link to="/login" className="nolink">
          {/* <Badge
            className={classes.skull}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            color="success"
            badgeContent=" "
            variant="dot"
          >
            <Avatar alt="" src={Skull}></Avatar>
          </Badge> */}
          <Typography color="primary" variant="body2">Inicia sesión</Typography>
        </Link>
        <Link to="/register" className="nolink">
          <Typography color="primary" variant="body2">Regístrate</Typography>
        </Link>
      </div>
    </div>
  );
}

export default Header;
