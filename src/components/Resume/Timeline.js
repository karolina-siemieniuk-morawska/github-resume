import React, { useState, useEffect } from "react";
// import Repo from "./TimelineContent/Repo";
import "../../assets/sass/Timeline.scss";

const Timeline = ({ username, user }) => {
  const creationDate = new Date(user.created_at).toLocaleDateString();

  const [repos, setRepos] = useState(null);

  // in order to sort repos by date, convert date to timestamp
  const convertDateToTimestamp = (date) => {
    return Date.parse(date);
  };

  // choosing 6 recently updated repositories
  const createSortedReposArray = (repos) => {
    if (!repos) {
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

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((result) => result.json())
      .then((fetchedRepos) => {
        setRepos(fetchedRepos);
      })
      .then(() => {
        createSortedReposArray(repos);
        console.log(repos);
      });
  }, [username]);

  return (
    <div className="timeline">
      {/* {repos.map((repo) => (
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
