import React, { useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Body from "./components/body";
import "./style.css";
import { useQuery } from "../../hooks";
import { useState } from "react";
import { Typography } from "@material-ui/core";

function CharacterResume() {
  const query = useQuery();
  const [isLoading, setLoading] = useState(true);
  const [character, setCharacter] = useState();

  useEffect(() => {
    const queryChar = query.get("char");
    if (queryChar !== null) {
      fetch(`http://localhost:4567/character/preset?char=${queryChar}`)
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
