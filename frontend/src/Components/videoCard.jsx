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
    const {
      id,
      title,
      profession,
      url,
      mentor_name,
      upload_date,
      description,
    } = this.props.data;
    return (
      <div>
        <div></div>
        <Card style={{ width: "35rem" }}>
          <iframe
            title={id}
            height="315"
            src={url}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <Card.Body className="cardBody">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary">{"Ask " + mentor_name}</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Video;
