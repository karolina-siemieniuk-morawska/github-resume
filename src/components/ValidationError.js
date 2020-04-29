import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../assets/sass/ValidationError.scss";

const ValidationError = ({ content }) => {
  // FontAwesome icon component
  const ex = <FontAwesomeIcon icon={faTimes} />;

  return (
    <p className="validation-error">
      <span>{ex}</span> {content}
    </p>
  );
};

export default ValidationError;
