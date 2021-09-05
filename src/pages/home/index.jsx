import React from "react";
import "./style.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

function Home() {
  return (
    <React.Fragment>
      <div className="home">
        <Header></Header>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}

export default Home;
