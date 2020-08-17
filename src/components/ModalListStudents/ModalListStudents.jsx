import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalListStudents(props) {
  function handleStringDate(date) {
    const newDate = {
      year: date.substring(0, 4),
      month: date.substring(5, 7),
      day: date.substring(8, 10),
    };
    return (`${newDate.day}/${newDate.month}/${newDate.year}`)
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Resultado das Buscas - Alunos
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table>
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Data Nascimento</th>
              <th>Sexo</th>
              <th>Turma</th>
            </tr>
          </thead>
          {props.datalist.map((data) => {
            return (
              <tbody key={data.id_aluno}>
                <tr>
                  <td>{data.nome}</td>
                  <td>{handleStringDate(data.data_nascimento)}</td>
                  <td>{data.sexo === "M" ? "Masculino" : "Feminino"}</td>
                  <td>{data.nome_turma}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalListStudents;
