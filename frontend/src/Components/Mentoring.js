import React, { Component, useState } from "react";
import { 
  Col, Button, Form, Container, 
  CardGroup, Card, CardDeck, Modal, Alert
} from 'react-bootstrap';
import Axios from 'axios';

class Mentoring extends Component {

  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      occupations: ['Engineer', 'Financial Analyst', 'Teacher', 'Educator', 'News Anchor', 'Data Scientist'],
      interests: ['Football', 'Music', 'BasketBall', 'Tennis'],
      data: []
    }

    this.data = 	
    [{'id': 1, 'url': 'https://i.kym-cdn.com/entries/icons/facebook/000/016/546/hidethepainharold.jpg', 'name': 'Mentor 1', 'profession': 'Carpenter'			, 'company': 'Home Depot'			, 'academic_info' : 'Tampa Technical School'	, 'degree' : 'Carpentry'				, 'interests': ['cooking', 'finance']},
    {'id': 2, 'url': 'https://i.kym-cdn.com/entries/icons/facebook/000/016/546/hidethepainharold.jpg', 'name': 'Mentor 2', 'profession': 'Software Engineer'	, 'company': 'JP Morgan & Chase'	, 'academic_info' : 'MIT'						, 'degree' : 'Electrical Engineering'	, 'interests': ['mathematics', 'anthropology']},
    {'id': 3, 'url': 'https://i.kym-cdn.com/entries/icons/facebook/000/016/546/hidethepainharold.jpg', 'name': 'Mentor 3', 'profession': 'Quant'				, 'company': 'Renisance'			, 'academic_info' : 'Harvard'					, 'degree' : 'Mathematics'				, 'interests': ['history', 'game theory']},
    
    {'id': 4, 'url': 'https://i.kym-cdn.com/entries/icons/facebook/000/016/546/hidethepainharold.jpg', 'name': 'Mentor 4', 'profession': 'Project Manager'	, 'company': 'Google'				, 'academic_info' : 'UC Berkley'				, 'degree' : 'Business Admin'			, 'interests': ['vr']},
    {'id': 5, 'url': 'https://i.kym-cdn.com/entries/icons/facebook/000/016/546/hidethepainharold.jpg', 'name': 'Mentor 5', 'profession': 'Project Manager'	, 'company': 'Visa'					, 'academic_info' : 'UConn'						, 'degree' : 'Mechanical Engineering'	, 'interests': ['3d printing', 'rockets']},
    {'id': 6, 'url': 'https://i.kym-cdn.com/entries/icons/facebook/000/016/546/hidethepainharold.jpg', 'name': 'Mentor 6', 'profession': 'Software Engineer'	, 'company': 'Golden State Warriors', 'academic_info' : 'AUT'						, 'degree' : 'Mathematics'				, 'interests': ['sports analytics', 'game theory']}];
    

  }

  componentDidMount() {
    
  }

  handleSearch() {
    console.log(document.getElementById('occupations-list'));
  }

  messageClick(mentor_id) {

    const handleQuestion = () => {

      Axios.post("localhost:4000/api/mentor", { "id": mentor_id, "question": "1232131" })
            .then(res => handleClose())
            .catch(err => document.getElementById('alert-status').innerText = "Failed to Upload");

    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div>
        <Button variant="primary" onClick={handleShow}>
          Send Message
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Enter your question</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea style={{ width: '100%' }} id="question-text"></textarea>
          </Modal.Body>
          <Modal.Footer>
            <div id="alert-status"></div>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleQuestion}>Send Message</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  
  render() {
    return (
      <Container className="mt-5">
        <Container>
          <Form>
            <Form.Row className="align-items-center">
              <Col>
                <Form.Label>Interests</Form.Label>
                {this.state.interests.map((interest) =>
                <div id="interests-list">
                  <Form.Check type="checkbox" 
                    label={interest} id={interest}
                    ></Form.Check>
                </div>
              )}            
              </Col>

              <Col>
                <Form.Label>Occupations</Form.Label>
                {this.state.occupations.map((occupation) =>
                <div id="occupations-list">
                  <Form.Check 
                    type="checkbox"
                    label={occupation}
                    id={occupation}
                    />
                </div>
                )}
              </Col>
            </Form.Row>
            <Button onClick={this.handleSearch}>Submit</Button>
          </Form>
        </Container>

        <Container className="mt-5">
        <CardDeck>
          {this.data.map((person) =>
            <Card style={{ minWidth: '25%' }} className="mb-3">
              <Card.Img variant="top" src={person.url} />
              <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                <Card.Text>
                  {person.profession}
                  <br/>
                  {person.company}
                  <br/>
                  {person.academic_info}
                  <br/>
                  {person.interests.join()}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                  <this.messageClick mentor_id={person.id} />
              </Card.Footer>

            </Card>
          )}
        </CardDeck>
      </Container>
      
      </Container>

    );
  }
}
export default Mentoring;
