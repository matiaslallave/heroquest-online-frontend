import React from "react";
import { makeStyles } from "@material-ui/styles";
import "./style.css";
import { Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  margin: {
    margin: "0.8rem",
  },
});

function Login() {
  const classes = useStyles();

  const history = useHistory();

  const handleSubmit = (e) => {
    // gestiono el submit del formulario
    e.preventDefault();
    if (e.target.checkValidity()) {
      // compruebo que todos los campos del formulario son validos
      // genero el objeto options para llamar al login
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json", // aviso a mi servidor que le envio los datos en formato JSON
        },
        body: JSON.stringify({
          // Genero el body como string
          email: e.target.email.value, // obtengo el value de un input por su name
          password: e.target.pass.value,
        }),
      };
      // llamo al login
      fetch("http://localhost:4567/auth/login", options)
        .then((r) => r.json())
        .then((token) => {
          sessionStorage.setItem("sessionToken", `${token.access_token}`);
          history.push("/");
        }); // aqui tendríamos el access token
    } else {
      // mostrar error al usuario con el campo que no es válido
    }
  };

  return (
    <React.Fragment>
      <div className="login">
        <div className="login-left"></div>
        <div className="login-right">
          <div className="form">
            <Typography variant="h4" color="secondary">
              Inicia Sesión
            </Typography>
            <form autoComplete="off" className="inputs" onSubmit={handleSubmit}>
              <TextField
                name="email"
                label="Correo electrónico"
                color="secondary"
                type="email"
                className={classes.margin}
              />
              <TextField
                name="pass"
                label="Contraseña"
                color="secondary"
                type="password"
                className={classes.margin}
              />
              <Button
                color="primary"
                variant="contained"
                type="submit"
                className={classes.margin}
              >
                Iniciar Sesión
              </Button>
            </form>
            <div>
              <Link to="/register" className="nolink">
                <Typography color="secondary">{`¿No tienes cuenta? Regístrate`}</Typography>
              </Link>
              <Link to="/" className="nolink">
                <Typography color="secondary">{`Volver a inicio`}</Typography>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
