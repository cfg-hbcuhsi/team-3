import React, { Component } from "react";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";
import "../App.css";
class Biographies extends Component {
  render() {
    return (
      <div>
        <div className="search">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              htmlSize="50"
              className="mr-sm-2"
              // style={{ padding: 200 }}
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </div>
      </div>
    );
  }
}
export default Biographies;
