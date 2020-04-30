import React from "react";
import Repo from "./TimelineContent/Repo";
import "../../assets/sass/Timeline.scss";

const Timeline = ({ user }) => {
  const creationDate = new Date(user.created_at).toLocaleDateString();

  // in order to sort repos by date, convert date to timestamp
  const convertDateToTimestamp = (date) => {
    return Date.parse(date);
  };

  // choosing 6 recently updated repositories
  const createSortedReposArray = (repos) => {
    if (repos.message === "Not Found") {
      return null;
    } else if (repos.length > 0) {
      repos.sort((a, b) => {
        return (
          convertDateToTimestamp(b.pushed_at) -
          convertDateToTimestamp(a.pushed_at)
        );
      });

      repos.splice(6, repos.length - 1);
    }
  };

  return (
    <div className="timeline">
      {/* {user.repos.map((repo) => (
        <Repo key={repo.id} {...repo} />
      ))} */}
      <h2>{creationDate} - GitHub profile was created</h2>
      {/* {localStorage.getItem("numberOfRepos") > 6 && (
        <small>
          Find more repos <a href={user.html_url}>here</a>
        </small>
      )} */}
    </div>
  );
};

export default Timeline;
