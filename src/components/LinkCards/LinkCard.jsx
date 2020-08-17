import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function LinkCard(props) {
  return (
    <Card style={{ width: "31.2rem" }}>
      <Card.Body>
        <Card.Title>{props.subject}</Card.Title>
        <Card.Text>
          Gerencie {props.subject.toLowerCase()}s de uma forma fácil, cadastre, edite e pesquise com
          poucos clicks.
        </Card.Text>
        <Link style={{ textDecoration: "none" }} to={`${props.subject.toLowerCase()}s`}>
        <Button variant="primary">Gerenciar {props.subject}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default LinkCard;
