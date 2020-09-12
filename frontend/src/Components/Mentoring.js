import React, { Component, useState } from "react";
import { 
  Col, Button, Form, Container, 
  CardGroup, Card, CardDeck, Modal, Alert
} from 'react-bootstrap';
import axios from 'axios';

class Mentoring extends Component {

  async componentDidMount() {
		
		var self = this;
		//this.state.data = [];
		const url = "http://localhost:4000/api/mentor";
		const res = await axios({method: 'post', url: url, data: {"pageOffset": 0, "pageSize": 3, "careers": [], "interests": []} });
		console.log(res.data);
		this.setState({data: res.data});
	}

  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      occupations: ['Software Engineer', 'Project Manager', 'Quant', 'Carpenter', 'News Anchor', 'Data Scientist'],
      interests: ['Cooking', 'Rockets', 'Basketball', 'Tennis', 'VR'],
      data: []
    }
  }

  async handleSearch() {
    var chosen_interests = this.state.interests.filter(interest => this.refs[interest].checked)
    var chosen_occupations = this.state.occupations.filter(occupation => this.refs[occupation].checked)
    
		const url = "http://localhost:4000/api/mentor";
		const res = await axios({method: 'post', url: url, data: {"pageOffset": 0, "pageSize": 5, "careers": chosen_occupations, "interests": chosen_interests }});
		console.log(res.data);
		this.setState({data: res.data});
  }

  messageClick(mentor_id) {

    const handleQuestion = () => {

      axios.post("http://localhost:4000/api/mentor", { "id": mentor_id, "question": document.getElementById('question-text').innerText })
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
                    label={interest} 
                    id={interest}
                    ref={interest}
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
                    ref={occupation}
                    />
                </div>
                )}
              </Col>
            </Form.Row>
            <Button onClick={this.handleSearch}>Search</Button>
          </Form>
        </Container>

        <Container className="mt-5">
        <CardDeck>
          {this.state.data.map((person) =>
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
