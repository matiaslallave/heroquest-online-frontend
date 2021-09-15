import { Typography } from "@material-ui/core";
import React from "react";
import Logo from "../../assets/hqologo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/index.js";
import LoginBadge from "./components/loginBadge";
import AccessMenu from "./components/accessMenu";
import { useStyles } from "./style";

function Header() {
  const classes = useStyles();

  const sessionActive = useAuth();

  return (
    <header className={classes.header}>
      <Link to="/">
        <img src={Logo} alt="" className={classes.logo}></img>
      </Link>
      <Typography color="primary" variant="h1" className={classes.title}>
        HeroQuest Online
      </Typography>
      <Typography color="primary" variant="h1" className={classes.titleSM}>
        HQO
      </Typography>
      <div className={classes.loginRegister}>
        {sessionActive ? <LoginBadge></LoginBadge> : <AccessMenu></AccessMenu>}
      </div>
    </header>
  );
}

export default Header;
