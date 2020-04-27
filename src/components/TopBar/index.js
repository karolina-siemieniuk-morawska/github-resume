import React, { useState, useEffect } from "react";
import Logo from "../Blocks/Logo/index";
import { Searchbar } from "../Blocks/Searchbar/index";
import { Button } from "react-bootstrap";
import InfoModal from "../InfoModal/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

// Turn hamburger button into exit button
export const turnIntoX = () => {
  const bars = document.querySelectorAll(".ham-bar");
  bars.forEach((bar) => bar.classList.toggle("change"));
  const menu = document.querySelector(".topbar-left");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
};

export const TopBar = ({ handleInput }) => {
  const info = <FontAwesomeIcon icon={faInfo} />;

  const [modalShow, setModalShow] = useState(true);

  // store info about recurring user in local storage
  const pageIsVisited = () => {
    localStorage.setItem("isRecurring", true);
  };

  useEffect(() => {
    if (localStorage.getItem("isRecurring") === "true") {
      setModalShow(false);
    }
  }, []);

  return (
    <div className="topbar">
      <Logo />
      <div className="hamburger" onClick={turnIntoX}>
        <span className="bar-1 ham-bar"></span>
        <span className="bar-2 ham-bar"></span>
        <span className="bar-3 ham-bar"></span>
      </div>
      <div className="topbar-left">
        <Button variant="primary" onClick={() => setModalShow(true)}>
          {info}
        </Button>
        <InfoModal
          show={modalShow}
          onHide={() => {
            setModalShow(false);
            pageIsVisited();
          }}
        />
        <Searchbar handleInput={handleInput} />
      </div>
    </div>
  );
};
