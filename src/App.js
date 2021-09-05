import "./App.css";
import React from "react";
import Home from './pages/home';
import { ThemeProvider } from "@material-ui/core/styles";
import {baseTheme} from './themes/themes.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Register from "./pages/register";

function App() {
  return (
    <ThemeProvider theme={baseTheme}><Router>
    <Switch>
      <Route path="/register">
        <Register></Register>
      </Route>
      <Route path="/">
        <Home></Home>
      </Route>
    </Switch>
  </Router></ThemeProvider>
  )
  
    
  
}

export default App;
