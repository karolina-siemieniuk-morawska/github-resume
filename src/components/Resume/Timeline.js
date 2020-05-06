import React from "react";
import { createSortedReposArray } from "../../utils/createSortedReposArray";
import Repo from "./TimelineContent/Repo";
import "../../assets/sass/Timeline.scss";

const Timeline = ({ data }) => {
  const creationDate = new Date(data.user.created_at).toLocaleDateString();

  const repos = createSortedReposArray(data.repos);

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
