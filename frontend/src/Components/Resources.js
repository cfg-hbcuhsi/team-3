import React, { Component } from "react";
import {Link} from "react-router-dom";
import Resource from "./Resource";
class Resources extends Component {
  constructor() {
    super();
    this.state = {
      resources: []
    }
  }

  componentDidMount() {
    fetch('/api/resources').then(res => res.json()).then(res => {
      this.setState({resources: res});
    }).catch(err => {
      console.log(err);
    })
  }


  render() {
    return (
      <div>
      <div>
        <button className="volunteering">Volunteering</button>
        <button className="scholarships">Scholarships</button>
        <button className="summer-programs">Summer Programs</button>
        <button className="major-info">Major Info</button>
        <button className="test-prep">Test Prep</button>
      </div>
      <div>
        <input type="text" placeholder="Search..">
          </input>
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
