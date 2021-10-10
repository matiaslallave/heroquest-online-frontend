import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Body from "./components/body";
import { useStyles } from "./style";

function Cookies() {
    const classes = useStyles()

  return (
    <div className={classes.container}>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default Cookies;