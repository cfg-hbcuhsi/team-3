import React, { Component } from "react";
import { 
  Col, Button, Form, Container, 
  CardGroup, Card, CardDeck
} from 'react-bootstrap';

class Mentoring extends Component {

  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      occupations: ['Engineer', 'Financial Analyst', 'Teacher', 'Educator', 'News Anchor', 'Data Scientist'],
      interests: ['Football', 'Music', 'BasketBall', 'Tennis']
    }

    this.data = [
      {'id': 1, 'name': 'Mentor 1', 'profession': 'Carpenter'			, 'company': 'Home Depot'			, 'academic_info' : 'Tampa Technical School'	, 'degree' : 'Carpentry'				, 'interests': ['cooking', 'finance']},
      {'id': 2, 'name': 'Mentor 2', 'profession': 'Software Engineer'	, 'company': 'JP Morgan & Chase'	, 'academic_info' : 'MIT'						, 'degree' : 'Electrical Engineering'	, 'interests': ['mathematics', 'anthropology']},
      {'id': 3, 'name': 'Mentor 3', 'profession': 'Quant'				, 'company': 'Renisance'			, 'academic_info' : 'Harvard'					, 'degree' : 'Mathematics'				, 'interests': ['history', 'game theory']},
      
      {'id': 4, 'name': 'Mentor 4', 'profession': 'Project Manager'	, 'company': 'Google'				, 'academic_info' : 'UC Berkley'				, 'degree' : 'Business Admin'			, 'interests': ['vr']},
      {'id': 5, 'name': 'Mentor 5', 'profession': 'Project Manager'	, 'company': 'Visa'					, 'academic_info' : 'UConn'						, 'degree' : 'Mechanical Engineering'	, 'interests': ['3d printing', 'rockets']},
      {'id': 6, 'name': 'Mentor 6', 'profession': 'Software Engineer'	, 'company': 'Golden State Warriors', 'academic_info' : 'AUT'						, 'degree' : 'Mathematics'				, 'interests': ['sports analytics', 'game theory']}
      ];
  }

  // componentDidMount() {
  //   var items = ['Engineer', 'Financial Analyst', 'Teacher', 'Educator', 'News Anchor', 'Data Scientist']
  //   const occupations = items.map((item) => 
  //     { "label": item, "value: item}
  //   )
  // }

  handleSearch(event) {

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
                <div>
                  <Form.Check type="checkbox" 
                    label={interest} id={interest}
                    ></Form.Check>
                </div>
              )}            
              </Col>

              <Col>
                <Form.Label>Occupations</Form.Label>
                {this.state.occupations.map((occupation) =>
                <div>
                  <Form.Check 
                    type="checkbox"
                    label={occupation}
                    id={occupation}
                    />
                </div>
                )}
              </Col>
            </Form.Row>
            <Button type="submit">Submit</Button>
          </Form>
        </Container>

        <Container className="mt-5">
        <CardDeck>
          {this.data.map((person) =>
            <Card style={{ minWidth: '25%' }} className="mb-3">
              <Card.Img variant="top" src="https://i.kym-cdn.com/entries/icons/facebook/000/016/546/hidethepainharold.jpg" />
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
            </Card>
          )}
        </CardDeck>
      </Container>
      </Container>

    );
  }
}
export default Mentoring;
