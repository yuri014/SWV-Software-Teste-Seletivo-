import React, { useState } from "react";
import { User } from "react-feather";

import api from "../../service/api";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

import ErrorModal from "../ErrorModal/ErrorModal";
import ModalListClasses from "../ModalListClasses/ModalListClasses";
import SuccessModal from "../SuccessModal/SuccessModal";

function FormClassesCards(props) {
  const [errorAlert, setErrorAlert] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  const [nome, setNome] = useState("");
  const [classData, setClassData] = useState([]);

  async function handleSearchClasses(event) {
    try {
      event.preventDefault();

      const response = await api.get("turmas", {
        params: {
          nome,
        },
      });
      setClassData(response.data);
      setModalShow(true);
    } catch (err) {
      setErrorAlert(true);
    }
  }

  async function handleRegisterClasses(event) {
    if (nome !== "") {
      event.preventDefault();

      await api
        .post("setturma", {
          nome,
        })
        .then(() => {
          setSuccessAlert(true)
        })
        .catch(() => {
          setErrorAlert(true);
        });
    } else {
      setErrorAlert(true);
    }
  }

  return (
    <Card style={{ width: "32.8rem" }}>
      <Card.Body>
        <Card.Title>{props.action} Turma</Card.Title>
        <Form
          onSubmit={
            props.action === "Pesquisar"
              ? handleSearchClasses
              : handleRegisterClasses
          }
        >
          <InputGroup className="mb-2 mr-sm-2">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <User />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Descrição Turma"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </InputGroup>
          <Button type="submit" style={{ float: "right" }} variant="primary">
            {props.action} Turma
          </Button>
        </Form>
      </Card.Body>
      <ModalListClasses
        datalist={classData}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ErrorModal show={errorAlert} onHide={() => setErrorAlert(false)} />
      <SuccessModal
        subject="Turma"
        show={successAlert}
        onHide={() => setSuccessAlert(false)}
      />
    </Card>
  );
}

export default FormClassesCards;
