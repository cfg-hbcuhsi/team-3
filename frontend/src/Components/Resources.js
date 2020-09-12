import React, { Component } from "react";
import {Link} from "react-router-dom";
import Resource from "./Resource";

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
        <button className="volunteering" onClick={() => this.filterResource('volunteering')}>Volunteering</button>
        <button className="scholarships" onClick={() => this.filterResource('scholarships')}>Scholarships</button>
        <button className="summer-programs" onClick={() => this.filterResource('summerPrograms')}>Summer Programs</button>
        <button className="major-info" onClick={() => this.filterResource('flyIns')}>Fly-ins</button>
        <button className="test-prep" onClick={() => this.filterResource('testPrep')}>Test Prep</button>
        <button className="all" onClick={() => this.filterResource('all')}>All</button>
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
