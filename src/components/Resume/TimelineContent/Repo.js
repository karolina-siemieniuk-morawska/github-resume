/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../../../assets/sass/Repo.scss";

const Repo = ({
  name,
  created_at,
  description,
  language,
  stargazers_count,
  html_url,
  forks_count,
}) => {
  const creationDate = new Date(created_at).toLocaleDateString();

  return (
    <div className="repo bubble">
      <h3 className="repo_name">
        <a href={html_url} target="_blank">
          {name}
        </a>
        <p className="repo_date">{creationDate}</p>
      </h3>
      {description && <p className="repo_description">"{description}"</p>}
      <div className="repo-info">
        <p className="language">
          Language: {language ? language : "not defined"}
        </p>
        <p className="stars">
          <i className="fas fa-star"></i>
          {stargazers_count}
        </p>
        <p className="forks">
          <i className="fas fa-code-branch"></i>
          {forks_count}
        </p>
      </div>
    </div>
  );
};

export default Repo;
