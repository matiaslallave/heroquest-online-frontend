import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Body from "./components/body";
import { useStyles } from "./style.js";

function CreateCharacter() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default CreateCharacter;
