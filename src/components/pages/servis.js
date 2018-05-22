import React, { Component } from 'react';
import { Jumbotron, Button, Grid, Row, Col, PageHeader } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Servis extends Component {

  render() {
    return (
      <div className="container">
          <Grid>

            <div align="middle">
              <PageHeader >
                Autoservis
              </PageHeader>
              <p >Bacon ipsum dolor amet biltong pancetta jowl boudin prosciutto meatball jerky turducken tenderloin. Tail swine tongue, meatball bresaola andouille prosciutto. Meatball ham hock strip steak pork loin drumstick burgdoggen rump, turducken tri-tip. Hamburger ham prosciutto pork loin pig leberkas. Ground round shank jerky sausage, spare ribs pastrami short loin capicola turkey rump tri-tip bresaola.</p>
            </div>

            
            <Row className="show-grid">
            
              <Col xs={6} md={4}>
                <Jumbotron>
                  <h1>Letní servis</h1>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                  </p>
                  <p>
                    <Link to="/carrepair" >
                      <Button bsStyle="primary">Objednat</Button>
                    </Link>
                  </p>
                </Jumbotron>;
              </Col>
              <Col xs={6} md={4}>
                <Jumbotron>
                  <h1>Zimní semestr</h1>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                  </p>
                  <p>
                    <Link to="/carrepair" >
                      <Button bsStyle="primary">Objednat</Button>
                    </Link>
                  </p>
                </Jumbotron>;
              </Col>
              <Col xsHidden md={4}>
                <Jumbotron>
                  <h1>Oprava vozu</h1>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                  </p>
                  <p>
                    <Link to="/carrepair">
                      <Button bsStyle="primary">Objednat</Button>
                    </Link>
                  </p>
                </Jumbotron>;
              </Col>
            
            </Row>

          </Grid>
          
      </div>
    );
  }
}

export default Servis;