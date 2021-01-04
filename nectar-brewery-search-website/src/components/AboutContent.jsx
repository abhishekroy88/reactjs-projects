import React from "react";
import { Container } from "react-bootstrap";

export default (props) => {
  return (
    <Container>
      <article className="about-content">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </article>
      <hr />
    </Container>
  );
};
