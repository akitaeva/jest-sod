import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const SummaryForm = () => {
  const [ tcChecked, setTcChecked ] = useState(false);

  const popover = (
    <Popover id="termsandconditions-popover">
        No ice cream will actually be delivered
    </Popover>
  );
  
  const checkboxLabel = (
    <p>
      I agree to 
      <OverlayTrigger placement="right" overlay={popover}> 
      <span style={{color: 'blue'}}>Terms and Conditions</span>
      </OverlayTrigger>
    </p>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check 
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkboxLabel}
          id={'Terms and Conditions'}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        Confirm Order
      </Button>
    </Form>
  )

};

export default SummaryForm;