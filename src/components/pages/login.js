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


class Login extends Component {

    handleClick = () => {
        console.log('HERE!', this.contextTypes);
        localStorage.setItem("email", "novakpav@seznam.cz");
        localStorage.setItem("id", "46468346846");
        localStorage.setItem("surname", "Novák");
    };

    render() {
        return (
        <div>
            <h1>Login</h1>
            <Row>
                <Col xs={6} md={4}>
                    <FieldGroup
                    id="emailID"
                    type="email"
                    label="E-mail"
                    placeholder="E-mail"
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
                
                <Link onClick={this.handleClick} to="/carrepair" >
                    <Button bsStyle="primary" >Přihlásit se</Button>
                </Link>
                </Col>
                </Row>

        </div>
        );
    }
}

export default Login;