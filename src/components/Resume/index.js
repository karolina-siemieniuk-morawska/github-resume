import React from "react";
import ResumeContent from "./ResumeContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

export default function Resume({ user }) {
  // FontAwesome icon components
  const ex = <FontAwesomeIcon icon={faTimes} />;
  const search = <FontAwesomeIcon icon={faSearch} />;

  if (!user) {
    return <div className="resume">{search} Enter username</div>;
  } else if (user.message === "Not Found") {
    return <div className="resume">{ex} User not found</div>;
  } else {
    return <div className="resume"><ResumeContent user={user} /></div>;
  }
}
