import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function AccessMenu () {
    return (
        <React.Fragment>
            <Link to="/login" className="nolink">
              <Typography color="primary" variant="body2">
                Inicia sesión
              </Typography>
            </Link>
            <Link to="/register" className="nolink">
              <Typography color="primary" variant="body2">
                Regístrate
              </Typography>
            </Link>
          </React.Fragment>
    );
}

export default AccessMenu;