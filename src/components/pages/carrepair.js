import React, { Component } from 'react';
import Captcha from 'react-captcha';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class CarRepair extends Component {

  handleClick = () => {
    
  };

  
  render() {

    // const Captcha = require('');  

    return (
      
      <div>
          <h1 className="text-center" >Napište nám</h1>
          

          <form>
            <Row>
              <Col xs={6} md={4}>
              <Link to="/login" >
                  <Button bsStyle="primary">Přihlásit se</Button>
                </Link>
              </Col>
            </Row>

            <Row>
              <Col xs={6} md={4}>
                <FieldGroup
                  id="userID"
                  type="text"
                  label="Zákaznické ID"
                  placeholder="Zákaznícké ID"
                  value={localStorage.getItem("id")}
                />  
              </Col>
              <Col xs={6} md={4}>
                <FormGroup controlId="messageID">
                  <ControlLabel>Zpráva</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="Zpráva" />
                </FormGroup>
              </Col>
              <Col xs={6} md={4}>
                <Captcha sitekey="xxxxxxxxxxxxxxxxxxxx" lang='en' theme='light' type='image' callback = {(value) => console.log(value)}/>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <FieldGroup
                id="surnameID"
                type="text"
                label="Přijímení"
                placeholder="Přijímení"
                value={localStorage.getItem("surname")}
                />
              </Col>
            </Row>
            
            <Row>
              <Col xs={6} md={4}>
                <FieldGroup
                  id="emailID"
                  type="email"
                  label="E-mail"
                  placeholder="E-mail"
                  value={localStorage.getItem("email")}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <FieldGroup
                  id="dateID"
                  type="date"
                  label="Datum"
                  placeholder="Datum"
                />
              </Col>
              <Col xs={6} md={4}></Col>
              <Col xs={6} md={4}>
                <Link onClick={this.handleClick} to="/happy" >
                  <Button bsStyle="primary">Odeslat</Button>
                </Link>
              </Col>
            </Row>
            

          </form>
      </div>
      
    );
  }
}

export default CarRepair;
