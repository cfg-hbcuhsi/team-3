import React, { Component } from "react";
import "./Resource.css";
import { 
    Col, Button, Form, Container, 
    CardGroup, Card, CardDeck
  } from 'react-bootstrap';

function Resource(parameter) {
    const {params} = parameter;
    const {title,summary,url} = params;
    
    return(
    
    <Card style={{ minWidth: '30%'}} className="mb-3">
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {summary}
            <br/>
            <a href={url}> More Info </a>
            <br/>
        </Card.Text>
    </Card.Body>
    </Card>
    
    )

}
export default Resource;