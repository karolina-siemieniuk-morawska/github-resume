import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Bio from "./Bio";
import Timeline from "./Timeline";
import { fetchRepos, fetchUser } from "../../utils/fetchData";
import "../../assets/sass/Resume.scss";

export default function Resume({ username }) {
  // FontAwesome icon components
  const ex = <FontAwesomeIcon icon={faTimes} />;
  const up = <FontAwesomeIcon icon={faArrowUp} />;

  const [data, setData] = useState({ user: [], repos: [] });

  useEffect(() => {
    (async () => {
      setData({
        user: await fetchUser(username),
        repos: await fetchRepos(username),
      });
    })();
  }, [username]);

  if (!data.user) {
    return (
      <div className="resume">
        {up} <span>Enter username</span>
      </div>
    );
  } else if (data.user.message === "Not Found") {
    return (
      <div className="resume">
        {ex} <span>User not found</span>
      </div>
    );
  } else {
    return (
      <div className="resume">
        <div className="resume-content">
          <Bio user={data.user} />
          <Timeline data={data} />
        </div>
      </div>
    );
  }
}
