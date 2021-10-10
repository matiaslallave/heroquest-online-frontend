import React, { useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Body from "./components/body";
import "./style.css";
import { useState } from "react";
import { Typography } from "@material-ui/core";


function CharacterResume() {
  const [isLoading, setLoading] = useState(true);
  const [character, setCharacter] = useState();

  useEffect(() => {
    const tempChar = JSON.parse(sessionStorage.getItem("character"));
    if (tempChar !== null) {
      fetch(`http://localhost:4567/character/preset/${tempChar.name}`)
        .then((r) => r.json())
        .then((char) => {
          setCharacter(char);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="container">
      <Header></Header>
      {isLoading ? (
        <Typography color="primary" variant="h2" align="center">
          Loading...
        </Typography>
      ) : (
        <Body character={character}></Body>
      )}
      <Footer></Footer>
    </div>
  );
}

export default CharacterResume;
