import React, { Component } from "react";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";
import Video from "./videoCard";
import "../App.css";
class Biographies extends Component {
  render() {
    return (
      <div>
        <div>Search Biographies</div>
        <div className="search">
          <Form inline>
            <FormControl
              size="lg"
              type="text"
              placeholder="Search"
              htmlSize="50"
              className="mr-sm-2"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </div>
        <div className="Results">
          <Video className="Results" />
        </div>
        <br />
      </div>
    );
  }
}
export default Biographies;
