import React from 'react';
import "./style.scss";

const Bio = ({ user }) => {
  return (
    <div className="bio">
      <img className="avatar" src={user.avatar_url} alt="avatar" />
      {user.name !== null && user.name !== "" && <h2><a href={user.html_url}>{user.name}</a></h2>}
      {user.email !== null && user.email !== "" && (
        <h3 className="email info">
          <i className="far fa-envelope"></i>
          {user.email}
        </h3>
      )}

      {user.location !== null && user.location !== "" && (
        <h3 className="location info">
          <i className="fas fa-map-marker-alt"></i> {user.location}
        </h3>
      )}

      {user.blog !== null && user.blog !== "" && (
        <h3 className="site info">
          <i className="fas fa-globe"></i>
          <a href={user.blog}>{user.blog}</a>
        </h3>
      )}

      {user.hireable === true ? (
        <h3 className="hireable info">
          <i className="fas fa-check"></i> Looking for job
        </h3>
      ) : (
        <h3 className="hireable info">
          <i className="fas fa-times"></i> Not looking for job
        </h3>
      )}
            {user.bio !== null && user.bio !== "" && (
        <h4 className="quote">"{user.bio}"</h4>
      )}

<div className="numberData">
        <h5>Number of public repositories:</h5>
        <div className="bar">
          {/* <div className="repo_bar" style={repoStyle}></div> */}
          <span>{user.public_repos}</span>
        </div>
        <h5>Number of followers:</h5>
        <div className="bar">
          {/* <div className="fans_bar" style={fansStyle}></div> */}
          <span>{user.followers}</span>
        </div>
      </div>
    </div>

  )
}
export default Bio;