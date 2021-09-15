import "./App.css";
import React from "react";
import Home from "./pages/home";
import { ThemeProvider } from "@material-ui/core/styles";
import { baseTheme } from "./themes/themes.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import ValidateEmail from "./pages/validate_email";
import CreateCharacter from "./pages/create-character";
import CharacterResume from "./pages/character-resume";
import CreateGame from "./pages/create_game";
import JoinGame from "./pages/join_game";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <Router>
        <Switch>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/validate_email">
            <ValidateEmail></ValidateEmail>
          </Route>
          <Route path="/create_character">
            <CreateCharacter></CreateCharacter>
          </Route>
          <Route path="/create_game">
            <CreateGame></CreateGame>
          </Route>
          <Route path="/character_resume">
            <CharacterResume></CharacterResume>
          </Route>
          <Route path="/join_game">
            <JoinGame></JoinGame>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
