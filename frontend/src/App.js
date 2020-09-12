import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Biographies from "./Components/Biographies";
import Mentoring from "./Components/Mentoring";
import Resources from "./Components/Resources";
import Home from "./Components/Home";
import "./App.css";
import AppNavBar from './Components/AppNavBar';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <AppNavBar />
          </div>
          <Switch>
            <Route path="/mentoring">
              <Mentoring />
            </Route>
            <Route path="/biographies">
              <Biographies />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
