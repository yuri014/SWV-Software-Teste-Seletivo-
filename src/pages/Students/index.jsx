import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MainNavbar from "../../components/Navbar/Navbar";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import MainBreadcrumb from "../../components/MainBreadcrumb/MainBreadcrumb";
import FormCard from "../../components/FormCards/FormCards";
import ViewContentButton from "../../components/ViewContentButton/ViewContentButton";
import Footer from "../../components/Footer/Footer";

function Students() {
  return (
    <Container>
      <MainNavbar activeStudentsPage="active-link" />
      <HeaderTitle title="Alunos" />
      <MainBreadcrumb page="Alunos" />
      <Container>
        <Row>
          <Col>
            <FormCard subject="Cadastrar Aluno" method="post"/>
          </Col>
          <Col>
            <FormCard subject="Pesquisar Aluno" method="get"/>
          </Col>
          <Col>
            <ViewContentButton subject="Alunos" />
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
