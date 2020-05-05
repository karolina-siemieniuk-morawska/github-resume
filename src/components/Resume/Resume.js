import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Bio from "./Bio";
import Timeline from "./Timeline";
import { fetchUser } from "../../utils/fetchUser";
import { getUsername } from "../../utils/getUsername";
import "../../assets/sass/Resume.scss";

export default function Resume() {
  // FontAwesome icon components
  const ex = <FontAwesomeIcon icon={faTimes} />;
  const up = <FontAwesomeIcon icon={faArrowUp} />;

  const user = fetchUser(getUsername());

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
        <div className="resume-content">
          <Bio user={user} />
          <Timeline user={user} />
        </div>
      </div>
    );
  }
}
