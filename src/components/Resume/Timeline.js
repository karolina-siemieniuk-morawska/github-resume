import React from "react";
import { fetchRepos } from "../../utils/fetchRepos";
import { getUsername } from "../../utils/getUsername";
import { createSortedReposArray } from "../../utils/createSortedReposArray";
import Repo from "./TimelineContent/Repo";
import "../../assets/sass/Timeline.scss";

const Timeline = ({ user }) => {
  const creationDate = new Date(user.created_at).toLocaleDateString();

  const repos = fetchRepos(getUsername());

  createSortedReposArray(repos);

  return (
    <div className="timeline">
      {repos.map((repo) => (
        <Repo key={repo.id} {...repo} />
      ))}
      <h2>{creationDate} - GitHub profile was created</h2>
    </div>
  );
};

export default Timeline;
