import { Typography} from "@material-ui/core";
import React from "react";
import Logo from "../../assets/hqologo.png";
import "./style.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/index.js";
import LoginBadge from "./components/loginBadge";
import AccessMenu from "./components/accessMenu";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    center: {
        justifyContent: "center",
    },
  });

function Header() {

    const classes = useStyles();

  const sessionActive = useAuth();

  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="" className="logo"></img>
      </Link>
      <Typography color="primary" variant="h1" className={classes.center}>
        HeroQuest Online
      </Typography>
      <div className="login-register">
        {sessionActive ? <LoginBadge></LoginBadge> : <AccessMenu></AccessMenu>}
      </div>
    </header>
  );
}

export default Header;
