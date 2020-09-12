import logo from "./logo.svg";
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";
import Biographies from "./Components/Biographies";
import Mentoring from "./Components/Mentoring";
import Resources from "./Components/Resources";
import Home from "./Components/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Navbar bg="primary" variant="dark">
              <img
                alt=""
                src={require("./Components/ourLogo.png")}
                width="50"
                height="50"
                className="d-inline-block align-top"
              />
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/mentoring">Mentoring</Nav.Link>
                <Nav.Link href="/biographies">Biographies</Nav.Link>
                <Nav.Link href="/resources">Resources</Nav.Link>
              </Nav>
            </Navbar>
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
