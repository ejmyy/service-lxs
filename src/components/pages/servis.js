import React, { Component } from 'react';
import { Jumbotron, Button, Grid, Row, Col, PageHeader, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Servis extends Component {

  render() {
    return (

        <Row>
          <Col xs={6} md={4} className="p-4 text-center">
            <h3>Pneuservis</h3>
            <Thumbnail src="http://via.placeholder.com/200x200" alt="242x200">
              <p></p>
              <Link to="/carservis" >
                <Button bsStyle="primary">Pneuservis</Button>
              </Link>
            </Thumbnail>
          </Col>

          <Col xs={6} md={4} className="p-4 text-center">
            <h3>Autoservis</h3>
            <Thumbnail src="http://via.placeholder.com/200x200" alt="242x200">
              <p></p>
              <Link to="/carservis" >
                <Button bsStyle="primary">Autoservis</Button>
              </Link>
            </Thumbnail>
          </Col>

          <Col xs={6} md={4} className="p-4 text-center">
            <h3>Garanční prohlídka</h3>
            <Thumbnail src="http://via.placeholder.com/200x200" alt="242x200">
              <p></p>
              <Link to="/carservis" >
                <Button bsStyle="primary">Garanční prohlídka</Button>
              </Link>
            </Thumbnail>
          </Col>
          
        </Row>
    );
  }
}

export default Servis;