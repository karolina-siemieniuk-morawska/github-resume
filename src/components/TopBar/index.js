import React, { useState, useEffect } from "react";
import Logo from "../Blocks/Logo/index";
import { Searchbar } from "../Blocks/Searchbar/index";
import { Button } from "react-bootstrap";
import InfoModal from "../InfoModal/index";
import "./style.scss";

export const TopBar = ({ handleInput }) => {
  const [modalShow, setModalShow] = useState(true);

  // store info about recurring user in local storage
  const pageIsVisited = () => {
    localStorage.setItem("isRecurring", true);
  }

  useEffect(() => {
    if (localStorage.getItem("isRecurring") === "true") {
      setModalShow(false);
    }
  }, [])

  return (
    <div className="topbar">
      <Logo />
      <div className="topbar-left">
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Info</Button>
        <InfoModal show={modalShow} onHide={() => {
          setModalShow(false);
          pageIsVisited();
        }} />
        <Searchbar handleInput={handleInput} />
      </div>
    </div>
  );
};
