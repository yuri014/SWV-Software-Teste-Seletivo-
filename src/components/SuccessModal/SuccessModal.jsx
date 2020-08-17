import React from "react"

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function SuccessModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cadastro de {props.subject}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Cadastro realizado com sucesso!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SuccessModal