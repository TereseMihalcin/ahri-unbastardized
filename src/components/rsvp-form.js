import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Rsvpform() {
  function rsvpform(formData) {
    const first = formData.get("first");
    const last = formData.get("last");
    alert(`you submitted: '${first} ${last}'`);
    // here you'll submit to a form, that you'll display on a page, with export options
  }
  return (
    <Form class="d-flex" action={rsvpform}>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
      <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="first" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
      <Form.Label>Last Name</Form.Label>
         <Form.Control type="text" name="last" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicOthers">
      <Row>
        <Form.Label column="lg">Party Members/Plus ones?</Form.Label>
      </Row>
      <Form.Label>How Many?</Form.Label>
      <Form.Control type="number" name="points" id="points" placeholder="0"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNames">
      <Form.Label>Member Names</Form.Label>
      <Form.Control type="textarea" as="textarea" name="party-names" rows="3" placeholder="Enter names of other party/family members"/>
      </Form.Group>
      
      <Button className="mb-3" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

//export default Rsvpform;