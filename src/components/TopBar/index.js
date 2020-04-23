import React, { useState, useEffect } from "react";
import Logo from "../Blocks/Logo/index";
import { Searchbar } from "../Blocks/Searchbar/index";
import { Button } from "react-bootstrap";
import InfoModal from "../InfoModal/index";
import "./style.scss";

export const TopBar = ({ handleInput }) => {
  const [modalShow, setModalShow] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("isRecurring") === "true") {
      setModalShow(false);
    }
  }, [modalShow])

  return (
    <div className="topbar">
      <Logo />
      <div className="topbar-left">
        <Searchbar handleInput={handleInput} />
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Info</Button>
        <InfoModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
};
