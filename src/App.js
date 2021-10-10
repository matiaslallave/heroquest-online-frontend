import "./App.css";
import React from "react";
import Home from "./pages/home";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import ValidateEmail from "./pages/validate_email";
import CreateCharacter from "./pages/create-character";
import CharacterResume from "./pages/character-resume";
import CreateGame from "./pages/create_game";
import JoinGame from "./pages/join_game";
import ActiveGame from "./pages/active_game";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import globalEs from "./languages/esp.json";
import globalEn from "./languages/eng.json";
import ThemeWrapper from "./themes/themes.js";
import Cookies from "./pages/cookies";
import GDPR from "./pages/gdpr";
import TandC from "./pages/T&C";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: globalEs,
    },
    en: {
      global: globalEn,
    },
  },
});

function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider>
        <ThemeWrapper>
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
              <Route path="/active_game/:gameCode">
                <ActiveGame></ActiveGame>
              </Route>
              <Route path="/cookies">
                <Cookies></Cookies>
              </Route>
              <Route path="/gdpr">
                <GDPR></GDPR>
              </Route>
              <Route path="/termsandcond">
                <TandC></TandC>
              </Route>
              <Route path="/">
                <Home></Home>
              </Route>
            </Switch>
          </Router>
        </ThemeWrapper>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
