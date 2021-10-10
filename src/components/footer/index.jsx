import { Typography, Switch, FormControlLabel } from "@material-ui/core";
import "./style.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../themes/themes";
import { useContext } from "react";
import GBFlag from "../../assets/gbflag.png";
import ESPFlag from "../../assets/espflag.png";

function Footer() {
  const [t, i18n] = useTranslation("global");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const { isAlter, changeTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    changeTheme((prevDark) => !prevDark); // cambiamos el check del boton del tema
  };
  return (
    <footer className="footer">
      <div className="subfooter">
        <Link to="/cookies" className="nolink">
          <Typography color="primary">{t("footer.lt")}</Typography>
        </Link>
        <Link to="/gdpr" className="nolink">
          <Typography color="primary">{t("footer.wwa")}</Typography>
        </Link>
        <Link to="/termsandcond" className="nolink">
          <Typography color="primary">{t("footer.cont")}</Typography>
        </Link>
      </div>
      <div className="footertheme">
        <img
          alt=""
          src={GBFlag}
          className="flagicon"
          onClick={() => {
            i18n.options.lng = "en";
            changeLanguage("en");
          }}
        ></img>
        <img
          alt=""
          src={ESPFlag}
          className="flagicon"
          onClick={() => {
            i18n.options.lng = "es";
            changeLanguage("es");
          }}
        ></img>
        <FormControlLabel
          control={
            <Switch
              checked={isAlter}
              onChange={handleChangeTheme}
              color="primary"
              label="Switch theme"
            />
          }
          label={<Typography color="primary">{t("footer.switch")}</Typography>}
        />

        <Typography color="primary">Copyright © 2021 MatDev v1.0.0</Typography>
      </div>
    </footer>
  );
}

export default Footer;
<Link to="/register" className="nolink">
  <Typography color="primary">Regístrate</Typography>
</Link>;
