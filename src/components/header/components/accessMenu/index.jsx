import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AccessMenu () {
  const [t] = useTranslation("global");

    return (
        <React.Fragment>
            <Link to="/login" className="nolink">
              <Typography color="primary" variant="body2">
              {t("header.login")}
              </Typography>
            </Link>
            <Link to="/register" className="nolink">
              <Typography color="primary" variant="body2">
              {t("header.register")}
              </Typography>
            </Link>
          </React.Fragment>
    );
}

export default AccessMenu;