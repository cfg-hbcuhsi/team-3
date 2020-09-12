import React, { Component } from "react";
import {Link} from "react-router-dom";
import Resource from "./Resource";
import { 
  Col, Button, Form, Container, 
  CardGroup, Card, CardDeck
} from 'react-bootstrap';

class Resources extends Component {
  constructor() {
    super();
    this.state = {
      resources: [],
      all: []
    }
  }

  componentDidMount() {
    fetch('/api/resources').then(res => res.json()).then(res => {
      this.setState({resources: res});
      this.setState({all: res});
    }).catch(err => {
      console.log(err); 
    })
  }

  filterResource(e){
    const copy = [...this.state.all]
    if (e === 'all') {
      this.setState({resources: copy})
    }
    else {
      const filtered = copy.filter(resource => resource.tag == e);
      this.setState({resources: filtered});
    }
  }



  render() {
    return ( 
      <div class="page">
      <div class="buttons">
        <Button className="btn" onClick={() => this.filterResource('volunteering')}>Volunteering</Button>
        <Button className="btn" onClick={() => this.filterResource('scholarships')}>Scholarships</Button>
        <Button className="btn" onClick={() => this.filterResource('summerPrograms')}>Summer Programs</Button>
        <Button className="btn" onClick={() => this.filterResource('flyIns')}>Fly-ins</Button>
        <Button className="btn" onClick={() => this.filterResource('testPrep')}>Test Prep</Button>
        <Button className="btn" onClick={() => this.filterResource('all')}>All</Button>
      </div>
      <div>
        <p>
          <h1> Most Recently Added Oppurtunities</h1>
          {this.state.resources.map(resource => {
            return <Resource id={resource.resource_id} params= {resource}/>  
          })}
        </p>
      </div>
      </div>
    );
  }
}
export default Resources;
