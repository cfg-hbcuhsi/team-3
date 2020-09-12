import React, { Component } from "react";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";
import Video from "./videoCard";
import "../App.css";
import axios from "axios";

class Biographies extends Component {
	async componentDidMount() {
		const url = "http://localhost:4000/api/videos";
		const res = await axios(url);
		console.log(res.data);
		console.log("Hello");
	}
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
