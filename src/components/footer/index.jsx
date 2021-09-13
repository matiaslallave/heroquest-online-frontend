import { Typography } from "@material-ui/core";
import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="subfooter">
        <Link to="/legal" className="nolink">
          <Typography color="primary">Aviso Legal</Typography>
        </Link>
        <Link to="/whoweare" className="nolink">
          <Typography color="primary">Quienes somos</Typography>
        </Link>
        <Link to="/contact" className="nolink">
          <Typography color="primary">Contacto</Typography>
        </Link>
      </div>
      <div>
        <Typography color="primary">Copyright © 2021 MatDev v1.0.0</Typography>
      </div>
    </footer>
  );
}

export default Footer;
<Link to="/register" className="nolink">
  <Typography color="primary">Regístrate</Typography>
</Link>;
