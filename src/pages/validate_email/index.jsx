import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Reject from "./components/reject";
import Valid from "./components/valid";
import { useQuery } from "../../hooks";

function ValidateEmail() {
  const query = useQuery(); // obtengo los query params
  const [isLoading, setLoading] = useState(true); // state variable para controlar si estoy llamando al API o no
  const [isEmailValid, setEmailValidity] = useState(false); // use state para controlar si el email es válido o no

  useEffect(() => {
    // solo la primera vez llamo a la validación del token, recogiendo el valor por parámetro
    const token = query.get("token"); // obtengo el query param del token
    console.log(token);
    if (token !== null) {
      // llamamos a nuestro API para hacer check del validity
      fetch(`http://localhost:4567/auth/validate?token=${token}`) // validamos tipo GET pasando el token por query param
        .then((r) => {
          setLoading(false); // dejamos de cargar
          if (!r.ok) throw new Error("No se ha validado correctamente"); // si no okey lanzamos error que captura el catch
          setEmailValidity(true); // si estamos aqui es que el API nos ha dicho que OK al token
        })
        .catch((err) => setEmailValidity(false)); // si capturamos el error ponemos a false el validity
    } else {
      setLoading(false); // dejamos de cargar
      setEmailValidity(false); // mostramos error
    }
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <Typography color="secondary">Loading...</Typography>
      ) : isEmailValid ? (
        <Valid></Valid>
      ) : (
        <Reject></Reject>
      )}
    </React.Fragment>
  );
}

export default ValidateEmail;
