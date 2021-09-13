import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Body from "./components/body";
import "./style.css";

function CreateCharacter() {
  return (
    <div className="container">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default CreateCharacter;
