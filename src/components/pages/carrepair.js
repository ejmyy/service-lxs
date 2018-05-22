import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

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
  render() {
    return (
      <div className="container">
          <h1>Car Repair</h1>
          <p>Lorem ipsum ..</p>
          <form>
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Text"
              placeholder="Enter text"
            />
          </form>
      </div>
    );
  }
}

export default CarRepair;
