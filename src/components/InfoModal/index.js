import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import Logo from "../Blocks/Logo/index";
import "./style.scss";

export default function InfoModal(propsy) {
  const logo = <Logo />;

  return (
    <>
      <Modal
        {...propsy}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Welcome to {logo}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>About Application</h4>
          <p>
            GitHub Resume App allows you to display most relevant info from GitHub user's profile in more legible form. Simply type the username in searchbar on top of the page and click on magnifying glass or press enter.
        </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={propsy.onHide}>Got it!</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
