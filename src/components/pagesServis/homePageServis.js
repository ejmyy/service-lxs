import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id} inputRef={node => this.inputNode = node}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

class HomePageServis extends Component {
  render() {
    return (
          <div>
              <h1>Login</h1>
              <Row>
                  <Col xs={6} md={4}>
                      <FieldGroup
                          id="login"
                          type="login"
                          label="Login"
                          placeholder="Login"
                      />
                  </Col>
              </Row>
              <Row>
                  <Col xs={6} md={4}>
                      <FieldGroup
                          id="passwordID"
                          type="password"
                          label="Heslo"
                          placeholder="Heslo"
                      />
                  </Col>
              </Row>
              <Row>
                  <Col xs={6} md={4}>

                      <Link onClick={this.handleClick} to="/myPage" >
                          <Button bsStyle="primary" >Přihlásit se</Button>
                      </Link>
                  </Col>
              </Row>

          </div>
    );
  }
}

export default HomePageServis;