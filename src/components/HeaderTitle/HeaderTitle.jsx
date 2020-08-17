import React from "react";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

function HeaderTitle(props) {
  return (
    <Jumbotron fluid style={{marginTop: "0.4rem", borderRadius: "0.3rem"}}>
      <Container>
        <h1 style={{marginLeft: "1.4rem"}}>/ {props.title}</h1>
      </Container>
    </Jumbotron>
  );
}

export default HeaderTitle;
