/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const Repo = ({
  name,
  created_at,
  description,
  language,
  stargazers_count,
  html_url,
  forks_count,
}) => {
  return (
    <div className="repo">
      <h3 className="repo_name">
        <a href={html_url} target="_blank">
          {name}
        </a>
      </h3>
      <p className="repo_date">{created_at}</p>
      {description && <p className="repo_description">"{description}"</p>}
      <p className="language">
        Language: <span>{language ? language : "not defined"}</span>
      </p>
      <p className="stars">
        <i className="fas fa-star"></i>
        {stargazers_count}
      </p>
      <p className="forks">
        Forks:
        {forks_count}
      </p>
    </div>
  );
};

export default Repo;
