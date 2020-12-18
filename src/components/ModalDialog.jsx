import React from "react";
import { Modal } from "react-bootstrap";
import { getMyOrder } from "../helpers";
import "../scss/libs/_bootstrap.scss";

function ModalDialog({ modalState, setModalState, items, totalPrice }) {
  return (
    <Modal
      className="bootstrap"
      show={modalState}
      onHide={() => setModalState(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Your order:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {getMyOrder(items).map((item) => {
          return <p>{item};</p>;
        })}
      </Modal.Body>
      <Modal.Footer>
        <p>
          Total price: <strong>{totalPrice}$</strong>
        </p>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDialog;
