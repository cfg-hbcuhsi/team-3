import React, { Component } from "react";
import {Link} from "react-router-dom";
import Resource from "./Resource";

class Resources extends Component {
  constructor() {
    super();
    this.state = [{
      "resource_id": 123,
      "title": "Resource-1",
      "summary": "This is the summary of a dummmy resource",
      "url": "https://www.dummy_resource.com"},
      {
        "resource_id": 1234,
        "title": "Resource-2",
        "summary": "This is the summary of a dummmy resource",
        "url": "https://www.dummy_resource.com"
      }
    ]
  }
  render() {
    return (
      <div class="page">
      <div class="buttons">
        <button className="volunteering">Volunteering</button>
        <button className="scholarships">Scholarships</button>
        <button className="summer-programs">Summer Programs</button>
        <button className="fly-in">Fly In</button>
        <button className="test-prep">Test Prep</button>
      </div>
      <div class="Search">
        <input type="text" placeholder="Search..">
        </input>
      </div>
      <div>
        <p>
          <h1> Most Recently Added Oppurtunities</h1>
          {this.state.map(resource => {
            return <Resource id={resource.resource_id} params= {resource}/>  
          })}
        </p>
      </div>
      </div>
    );
  }
}
export default Resources;
