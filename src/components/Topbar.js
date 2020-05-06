import React from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Hamburger from "./Hamburger";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import "../assets/sass/Topbar.scss";

export default function Topbar({ setUsername, handleShow }) {
  return (
    <div className="topbar">
      <Logo />
      <Hamburger />
      <Searchbar setUsername = {setUsername} />
      <Button className="info-button" variant="primary" onClick={() => handleShow()} >
        { <FontAwesomeIcon icon={faInfo} /> }
      </Button>
    </div>
  );
}
