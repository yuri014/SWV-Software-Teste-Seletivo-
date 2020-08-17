import React, { useState } from "react";

import api from "../../service/api";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import MainNavbar from "../../components/Navbar/Navbar";
import LinkCard from "../../components/LinkCards/LinkCard";
import Footer from "../../components/Footer/Footer";
import ModalListClasses from "../../components/ModalListClasses/ModalListClasses";
import ModalListStudents from "../../components/ModalListStudents/ModalListStudents";
import ErrorModal from "../../components/ErrorModal/ErrorModal";

function Home() {
  const [modalShow, setModalShow] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [subject, setSubject] = useState("");
  const [nome, setNome] = useState("");
  const [dataSubjectList, setDataSubjectList] = useState([]);

  async function handleSearch(event) {
    try {
      event.preventDefault();

      const response = await api.get(`${subject}`, {
        params: {
          nome,
        },
      });

      setDataSubjectList(response.data);
      setModalShow(true);
    } catch (err) {
      setErrorAlert(true);
    }
  }

  return (
    <Container>
      <MainNavbar activeHomePage="active-link" />
      <br />
      <Jumbotron>
        <h1>Olá,</h1>
        <p>
          Este sistema foi desenvolvido para facilitar parte da administração da
          sua <br /> escola e estamos felizes em ter você aqui!
        </p>
        <p>
          <Button variant="primary">Saiba Mais</Button>
        </p>
      </Jumbotron>
      <Container fluid>
        <Form onSubmit={handleSearch}>
          <Form.Row className="justify-content-md-center">
            <Col xs={9}>
              <Form.Label htmlFor="inlineFormInput" srOnly>
                Name
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                value={nome}
                onChange={(event) => {
                  setNome(event.target.value);
                }}
                placeholder="Procuras por..."
              />
            </Col>
            <Col xs="auto">
              <Form.Label
                className="mb-2"
                htmlFor="inlineFormCustomSelect"
                srOnly
              >
                Preference
              </Form.Label>
              <Form.Control
                as="select"
                className="mb-2"
                value={subject}
                onChange={(event) => {
                  setSubject(event.target.value);
                }}
                id="inlineFormCustomSelect"
                custom
              >
                <option value="0" hidden>
                  Selecione
                </option>
                <option value="alunos">Alunos</option>
                <option value="turmas">Turmas</option>
              </Form.Control>
            </Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2">
                Pesquisar
              </Button>
            </Col>
          </Form.Row>
        </Form>
        <br />
        <Container className="d-flex justify-content-center">
          <Row>
            <Col xs={6}>
              <LinkCard subject="Aluno" />
            </Col>
            <Col sx={6}>
              <LinkCard subject="Turma" />
            </Col>
          </Row>
        </Container>
      </Container>
      <br />
      <Footer />
      {subject === "alunos" ? (
        <ModalListStudents
          datalist={dataSubjectList}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : (
        <ModalListClasses
          datalist={dataSubjectList}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}
      <ErrorModal show={errorAlert} onHide={() => setErrorAlert(false)} />
    </Container>
  );
}

export default Home;
