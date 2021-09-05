import React from "react";
import Header from "../../components/header";
import "./style.css";
import Mage from "../../assets/register.jpg";
import { Typography, TextField } from "@material-ui/core";

function Register() {
  return (
    <React.Fragment>
      <div className="register">
        <div className="container">
          <div className="form">
            <Typography variant="h4" color="primary">
              Regístrate
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                id="email"
                label="Correo electrónico"
                variant="outlined"
                color="primary"
              />
              <TextField
                id="pass"
                label="Contraseña"
                variant="outlined"
                color="primary"
                type="password"
              />
              <TextField
                id="repeat-pass"
                label="Repite contraseña"
                variant="outlined"
                color="primary"
                type="password"
              />
            </form>
          </div>
          <img src={Mage} alt="" className="mage"></img>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
