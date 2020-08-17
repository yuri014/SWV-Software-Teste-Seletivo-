import React, { useState, useEffect } from "react";
import { User, Circle, Calendar, Users } from "react-feather";

import "./FormCards.css";

import api from "../../service/api";

import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import ModalListStudents from "../ModalListStudents/ModalListStudents";
import SuccessModal from "../SuccessModal/SuccessModal";

function FormCard(props) {
  const [errorAlert, setErrorAlert] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  const [nome, setNome] = useState("");
  const [id_turma, setId_Turma] = useState("");
  const [sexo, setSexo] = useState("");
  const [data_nascimento, setData_Nascimento] = useState("");
  const [studentData, setStudentData] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    api.get("turmas").then((response) => {
      const classesData = response.data;
      setClasses(classesData);
    });
  }, []);

  async function handleSearchStudent(event) {
    try {
      event.preventDefault();

      const response = await api.get("alunos", {
        params: {
          nome,
          id_turma,
          sexo,
        },
      });
      if (response.data.length > 0) {
        setStudentData(response.data);
        setModalShow(true);
      } else {
        setErrorAlert(true);
      }
    } catch (err) {
      setErrorAlert(true);
    }
  }

  async function handleRegisterStudent(event) {
    if ((nome, id_turma, sexo !== "" && data_nascimento.length === 10)) {
      event.preventDefault();

      await api
        .post("setaluno", {
          nome,
          id_turma,
          sexo,
          data_nascimento,
        })
        .then(() => {
          setSuccessAlert(true);
        })
        .catch(() => {
          setErrorAlert(true);
        });
    } else {
      setErrorAlert(true);
    }
  }

  return (
    <Card className="card-block">
      <Card.Body>
        <Card.Title>{props.subject}</Card.Title>
        <Form
          onSubmit={
            props.method === "get" ? handleSearchStudent : handleRegisterStudent
          }
        >
          <InputGroup className="mb-2 mr-sm-2">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <User />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id="inlineFormInputGroupUsername2"
              placeholder="Nome completo do Aluno"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </InputGroup>
          {props.method === "post" ? (
            <InputGroup className="mb-2 mr-sm-2">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <Calendar />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="inlineFormInputGroupUsername2"
                type="date"
                placeholder="Data de nascimento do Aluno"
                value={data_nascimento}
                onChange={(event) => setData_Nascimento(event.target.value)}
              />
            </InputGroup>
          ) : null}
          <InputGroup className="mb-2 mr-sm-2">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <Circle />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              as="select"
              id="inlineFormCustomSelect"
              value={sexo}
              onChange={(event) => setSexo(event.target.value)}
              custom
            >
              <option value="" hidden>
                Sexo
              </option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </Form.Control>
          </InputGroup>
          <InputGroup className="mb-2 mr-sm-2">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <Users />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              as="select"
              value={id_turma}
              onChange={(event) => setId_Turma(event.target.value)}
              id="inlineFormCustomSelect"
              custom
            >
              <option value="" hidden>
                Turma
              </option>
              {classes.length > 0 ? (
                classes.map((data) => {
                  return (
                    <option key={data.id_turma} value={data.id_turma}>
                      {data.nome}
                    </option>
                  );
                })
              ) : (
                <option>Carregando</option>
              )}
            </Form.Control>
          </InputGroup>
          <Button type="submit" className="mb-2 form-button">
            {props.subject}
          </Button>
        </Form>
      </Card.Body>
      <ModalListStudents
        datalist={studentData}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ErrorModal show={errorAlert} onHide={() => setErrorAlert(false)} />
      <SuccessModal subject="Aluno" show={successAlert} onHide={() => setSuccessAlert(false)} />
    </Card>
  );
}

export default FormCard;
