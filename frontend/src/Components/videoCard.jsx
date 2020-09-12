import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Card,
  Modal,
} from "react-bootstrap";
import "../App.css";

class Video extends Component {
  state = {
    show: false,
  };
  handleQuestion = () => {
    axios
      .post("http://localhost:4000/api/videos/question", {
        id: 1,
        question: "1232131",
      })
      .then((res) => this.handleClose())
      .catch(
        (err) =>
          (document.getElementById("alert-status").innerText =
            "Failed to Upload")
      );
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

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
    const { show } = this.state;
    return (
      <div>
        <div></div>
        <Card style={{ width: '100%' }}>
          <iframe
            title={id}
            src={url}
            height="100%"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <Card.Body className="cardBody">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary" onClick={() => this.handleShow()}>
              {"Ask " + mentor_name}
            </Button>
            <Modal
              show={show}
              onHide={() => this.handleClose()}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Ask {mentor_name} your question</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <textarea
                  style={{ width: "100%" }}
                  id="question-text"
                ></textarea>
              </Modal.Body>
              <Modal.Footer>
                <div id="alert-status"></div>
                <Button variant="secondary" onClick={() => this.handleClose()}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => this.handleQuestion()}>
                  Send Message
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
        <br />
      </div>
    );
  }
}
export default Video;
