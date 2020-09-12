import logo from "./logo.svg";
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Biographies from "./Components/Biographies";
import Mentoring from "./Components/Mentoring";
import Resources from "./Components/Resources";
import Home from "./Components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/mentoring">Mentoring</Link>
              </li>
              <li>
                <Link to="/biographies">Biographies</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/mentoring">
              <Biographies />
            </Route>
            <Route path="/biographies">
              <Mentoring />
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
