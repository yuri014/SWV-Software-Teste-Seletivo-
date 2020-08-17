import React, { useState } from "react";

import api from "../../service/api";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import ModalListStudents from "../ModalListStudents/ModalListStudents";
import ModalListClasses from "../ModalListClasses/ModalListClasses";
import ErrorModal from "../ErrorModal/ErrorModal";

function ViewContentButton(props) {
  const [errorAlert, setErrorAlert] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [allSubjects, setAllSubjects] = useState([]);

  async function listAllSubjects(event) {
    try {
      event.preventDefault();
      const response = await api.get(`${props.subject.toLowerCase()}`);

      setAllSubjects(response.data);
      setModalShow(true);
    } catch (err) {
      setErrorAlert(true)
    }
  }

  return (
    <Card style={{ marginTop: "1rem" }}>
      <Card.Body>
        <Form>
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <h2>Visualizar {props.subject}</h2>
            </Col>
            <div style={{ flex: "1" }}></div>
            <Col xs="auto">
              <Button
                style={{ padding: "0.4rem 2rem" }}
                type="submit"
                className="mb-2"
                onClick={listAllSubjects}
              >
                Exibir
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Card.Body>
      {props.subject === "Alunos" ? (
        <ModalListStudents
          datalist={allSubjects}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : (
        <ModalListClasses
          datalist={allSubjects}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}
      <ErrorModal show={errorAlert} onHide={() => setErrorAlert(false)} />
    </Card>
  );
}

export default ViewContentButton;
