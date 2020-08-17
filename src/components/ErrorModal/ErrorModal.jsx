import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ErrorModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Alerta de erro!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Por favor, tente novamente...</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal;
