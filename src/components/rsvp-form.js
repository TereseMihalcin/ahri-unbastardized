import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import axios from 'axios';

export default function Rsvpform() {
//   function rsvpform() {
//     const myform = document.querySelector('form');
//     var form = new FormData(myform);
//     //form.append('name', 'my name');
//     const first = form.get("first");
//     const last = form.get("last");

//     console.log(first);


//   axios.post('https://httpbin.org/post', {
//       firstname: first,
//       lastname: last,
//   }, {
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
//   }).then(({data})=> console.log(data))
//   .catch(error => {
//     console.error(error);
// });
   
    // here you'll submit to a form, that you'll display on a page, with export options
//  }
  return (
    <Form name="rsvp" method="POST" data-netlify="true" >
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