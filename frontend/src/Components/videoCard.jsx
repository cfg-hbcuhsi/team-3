import React, { Component } from "react";
import {
  Form,
  Button,
  FormControl,
  Card,
  ResponsiveEmbed,
} from "react-bootstrap";
import "../App.css";

class Video extends Component {
  render() {
    return (
      <div>
        <div></div>
        <Card style={{ width: "35rem" }}>
          <iframe
            title="Video"
            height="315"
            src="https://www.youtube.com/embed/iP-3bkIJAM0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <Card.Body className="cardBody">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Discription</Card.Text>
            <Button variant="primary">Ask</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Video;
