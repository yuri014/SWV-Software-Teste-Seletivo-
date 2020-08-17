import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MainNavbar from "../../components/Navbar/Navbar";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import MainBreadcrumb from "../../components/MainBreadcrumb/MainBreadcrumb";
import FormClassesCards from "../../components/FormClassesCards/FormClassesCards";
import ViewContentButton from "../../components/ViewContentButton/ViewContentButton";
import Footer from "../../components/Footer/Footer";

function Students() {
  return (
    <Container>
      <MainNavbar activeClassesPage="active-link" />
      <HeaderTitle title="Turmas" />
      <MainBreadcrumb page="Turmas" />
      <Container>
        <Row>
          <Col>
            <FormClassesCards action="Cadastrar" />
          </Col>
          <Col>
            <FormClassesCards action="Pesquisar" />
          </Col>
          <Col>
            <ViewContentButton subject="Turmas" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Students;
