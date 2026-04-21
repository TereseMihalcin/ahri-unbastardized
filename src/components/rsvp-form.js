import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
      <input type="hidden" name="form-name" value="rsvp" />
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>Name(s)</Form.Label>
        <Form.Control type="text" name="name" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>How many party members?</Form.Label>
        <Form.Control type="number" name="members" id="members" placeholder="0"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Would you like a golf cart ride to the ceremony from the parking lot? It's a short walk on a mixed terrain path</Form.Label>
        <Form.Check type="checkbox" name="golfcart" label="I'd like a ride" />
      </Form.Group>
      <Button className="mb-3" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

//export default Rsvpform;