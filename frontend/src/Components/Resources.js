import React, { Component } from "react";
import {Link} from "react-router-dom";
import Resource from "./Resource";
import { 
  Col, Button, Form, Container, 
  CardGroup, Card, CardDeck, DropdownButton, Dropdown
} from 'react-bootstrap';

class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: [],
      all: [],
      currentLanguage: 'en'
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
      this.state.resources = copy;
    }
    else {
      const filtered = copy.filter(resource => resource.tag == e);
      this.state.resources = filtered;
    }
    this.forceUpdate();
  }

  translate(targetLanguage){

    this.translate_all(targetLanguage).then(res => {
      this.state.all = res
    })

    this.translate_resources(targetLanguage).then(res => {
      console.log(res)
      this.state.resources = res
      this.forceUpdate();
    })

    this.state.currentLanguage = targetLanguage;

  }

  async translate_all(targetLanguage){
    let all_translation = this.state.all.map(async resource => {
      resource.resource_id = String(resource.resource_id);
      return await this.translate_obj(resource, this.state.currentLanguage, targetLanguage)
    })

    return await Promise.all(all_translation);
  }

  async translate_resources(targetLanguage) {
    let resource_translation = this.state.resources.map(async resource => {
      resource.resource_id = String(resource.resource_id);
      return await this.translate_obj(resource, this.state.currentLanguage, targetLanguage)
    })
    return await Promise.all(resource_translation);
  }

  async translate_obj(obj, sourceLanguage, targetLanguage) {
    const keys = Object.keys(obj);
    let trans_val = keys.map(async k => {
      const text = obj[k];
      const params = {
        method: 'POST',
        body: JSON.stringify({sourceLanguage,targetLanguage,text}),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      return await fetch('/api/translate', params)
    })
    trans_val = await Promise.all(trans_val);
    trans_val = trans_val.map(async res => await res.json())
    trans_val = await Promise.all(trans_val);
    let res = {}
    for(let i=0; i<keys.length; i++){
      res[keys[i]] = trans_val[i].text
    }
    return res;
  }

  



  render() {
    return ( 
      <div class="page">
        <Container>
          <div class="buttons">
            <Button className="btn" onClick={() => this.filterResource('volunteering')}>Volunteering</Button>
            <Button className="btn" onClick={() => this.filterResource('scholarships')}>Scholarships</Button>
            <Button className="btn" onClick={() => this.filterResource('summerPrograms')}>Summer Programs</Button>
            <Button className="btn" onClick={() => this.filterResource('flyIns')}>Fly-ins</Button>
            <Button className="btn" onClick={() => this.filterResource('testPrep')}>Test Prep</Button>
            <Button className="btn" onClick={() => this.filterResource('all')}>All</Button>
            <DropdownButton id="dropdown-basic-button" title="Translate" className="btn">
            <Dropdown.Item onSelect={() => this.translate('en')}>English</Dropdown.Item>
            <Dropdown.Item onSelect={() => this.translate('es')}>Spanish</Dropdown.Item>
            <Dropdown.Item onSelect={() => this.translate('zh')}>Chinese</Dropdown.Item>
            <Dropdown.Item onSelect={() => this.translate('hi')}>Hindi</Dropdown.Item>
            </DropdownButton>
          </div>
        </Container>
      <div>
        <Container style={{ width: window.innerWidth / 4 }}>
          <h1> Most Recently Added Oppurtunities</h1>
            {this.state.resources.map(resource => {
              return <Resource id={resource.resource_id} params= {resource}/>  
            })}
        </Container>
      </div>
      </div>
    );
  }
}
export default Resources;
