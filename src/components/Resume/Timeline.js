/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { createSortedReposArray } from "../../utils/createSortedReposArray";
import Repo from "./TimelineContent/Repo";
import "../../assets/sass/Timeline.scss";

const Timeline = ({ data }) => {
  const creationDate = new Date(data.user.created_at).toLocaleDateString();

  const repos = createSortedReposArray(data.repos);

  return (
    <>
      <div className="timeline">
        <h2 className="timeline-title">Profile activity</h2>
        {repos.map((repo) => (
          <Repo key={repo.id} {...repo} />
        ))}
        <h2 className="creation-bubble">
          <p>GitHub profile was created</p> <p>{creationDate}</p>
        </h2>
      </div>
      {data.repos.length > 6 && (
        <h3 className="more-repos">
          Hey, this user has {data.repos.length - 6} public repos more - check
          them all out{" "}
          <a href={`${data.user.html_url}/?tab=repositories`} target="_blank">
            here
          </a>
          .
        </h3>
      )}
    </>
  );
};

export default Timeline;
