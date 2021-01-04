import React from "react";
import { Form, Button, Container } from "react-bootstrap";

export default () => {
  return (
    <Container>
      <Form>
        <h3 className="form-heading">Get in touch</h3>

        <Form.Group controlId="formBasicText">
          <Form.Control type="text" placeholder="Name" required />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicTextArea">
          <Form.Control
            as="textarea"
            rows="5"
            maxLength="250"
            placeholder="Say Hi.."
            required
          />
        </Form.Group>

        <Button variant="warning" size="lg" block type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
