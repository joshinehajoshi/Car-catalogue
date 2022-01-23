import React from 'react';
import '../styling/contact.css';
import { Form, Button } from 'react-bootstrap';
// import Button from '@restart/ui/esm/Button';

function Contact() {
  return (
  <div className="contact-wrapper">
      <h1>Feedback Form</h1>
      <br />
      <div className="form-wrapper">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label><h3>Name</h3></Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label><h3>Email</h3></Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label><h3>Subject</h3></Form.Label>
          <Form.Control type="text" placeholder="Subject" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label><h3>Feedback</h3></Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group>
          <Button>Submit</Button>
        </Form.Group>
      </Form>
      </div>
      <div className="address-wrapper">
      <a href="#" className="social-media-icon"><i class="fa fa-map-marker" aria-hidden="true"></i></a>
      <h4 className="address">
      Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</h4></div><br />
      <a href="#" className="social-media-icon"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
      <a href="#" className="social-media-icon"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
      <a href="#" className="social-media-icon"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
      <a href="#" className="social-media-icon"><i class="fa fa-pinterest-square" aria-hidden="true"></i></a>
      <a href="#" className="social-media-icon"><i class="fa fa-instagram" aria-hidden="true"></i></a>
  </div>
  )
}

export default Contact;
