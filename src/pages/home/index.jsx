import React from "react";
import "./style.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Body from "./components/body";

function Home() {
  return (
    <div className="home">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default Home;
