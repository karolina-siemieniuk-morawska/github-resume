import React from "react";
import ResumeContent from "./ResumeContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

export default function Resume({ user }) {
  // FontAwesome icon components
  const ex = <FontAwesomeIcon icon={faTimes} />;
  const up = <FontAwesomeIcon icon={faArrowUp} />;

  if (!user) {
    return (
      <div className="resume">
        {up} <span>Enter username</span>
      </div>
    );
  } else if (user.message === "Not Found") {
    return (
      <div className="resume">
        {ex} <span>User not found</span>
      </div>
    );
  } else {
    return (
      <div className="resume">
        <ResumeContent user={user} />
      </div>
    );
  }
}
