import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import "./style.css";
import { Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  margin: {
    margin: "0.8rem",
  },
});

function Register() {
  const [message, setMessage] = useState("");
  const [colorMessage, setColorMessage] = useState("");
  const [t] = useTranslation("global");
  const classes = useStyles();

  const handleSubmit = (e) => {
    // gestiono el submit del formulario
    e.preventDefault();
    if (e.target.checkValidity()) {
      // compruebo que todos los campos del formulario son validos
      if (e.target.pass.value.length >= 6) {
        if (e.target.pass.value === e.target.repeated_pass.value) {
          // solo ejecuto el registro si las passwords son iguales
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
          // llamo al registro
          fetch("http://localhost:4567/auth/register", options)
            .then((r) => r.json())
            .then((d) => {
              console.log(d);
              setColorMessage("");
              setMessage(t("signin.submitmsg"));
              e.target.pass.value = "";
              e.target.repeated_pass.value = "";
            });
        } else {
          setColorMessage("error");
          setMessage(t("signin.errpass"));
          e.target.pass.value = "";
          e.target.repeated_pass.value = "";
        }
      } else {
        setColorMessage("error");
        setMessage(t("signin.errchar"));
        e.target.pass.value = "";
        e.target.repeated_pass.value = "";
      }
    } else {
      // mostrar error al usuario con el campo que no es válido
    }
  };

  return (
    <React.Fragment>
      <div className="register">
        <div className="register-left"></div>
        <div className="register-right">
          <div className="form">
            <Typography variant="h4" color="secondary">
            {t("signin.signin")}
            </Typography>
            <form autoComplete="off" className="inputs" onSubmit={handleSubmit}>
              <TextField
                name="email"
                label={t("signin.email")}
                color="secondary"
                type="email"
                className={classes.margin}
              />
              <TextField
                name="pass"
                label={t("signin.pass")}
                color="secondary"
                type="password"
                className={classes.margin}
              />
              <TextField
                name="repeated_pass"
                label={t("signin.repeatpass")}
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
                {t("signin.submit")}
              </Button>
            </form>

            <Typography color={colorMessage} className={classes.margin}>
              {message}
            </Typography>

            <div>
              <Link to="/login" className="nolink">
                <Typography color="secondary">{t("signin.account")}</Typography>
              </Link>
              <Link to="/" className="nolink">
                <Typography color="secondary">{t("signin.back")}</Typography>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
