import React, { Component } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import Video from "./videoCard";
import "../App.css";
class Biographies extends Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:4000/api/videos", {
      mode: "no-cors",
    });
  fetchVideos() {
    
  }
  render() {
    return (
      <div>
        <div className="search">
          <Form inline>
            <FormControl
              size="lg"
              type="text"
              value={this.state.value}
              placeholder="Search Biographies"
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
