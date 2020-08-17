import React from "react";

import "./ModalListClasses.css";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalListClasses(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Resultado das Buscas - Turmas
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table>
          <thead>
            <tr>
              <th>Turmas</th>
            </tr>
          </thead>
          <tbody>
            {props.datalist.map((data) => {
              return (
                <tr key={data.id_turma}>
                  <td>{data.nome}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalListClasses;
