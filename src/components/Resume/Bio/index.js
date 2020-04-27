import React from "react";
import "./style.scss";

const Bio = ({ user }) => {
  const barWidth = (type) => {
    return {
      width: `${type * 2}px`,
    };
  };

  return (
    <div className="bio">
      <div className="intro">
        <img className="avatar" src={user.avatar_url} alt="avatar" />
        {user.name !== null && user.name !== "" && (
          <h2>
            <a href={user.html_url}>{user.name}</a>
          </h2>
        )}

        <div className="contact-info">
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

          {user.company !== null && user.company !== "" && (
            <h3 className="company">
              <i class="fas fa-building"></i> {user.company}
            </h3>
          )}
        </div>

        {user.bio !== null && user.bio !== "" && (
          <h4 className="quote">"{user.bio}"</h4>
        )}
      </div>

      <div className="number-data">
        <section>
          <h5>Repositories:</h5>
          <div>
            <div
              className="repo_bar bar"
              style={barWidth(user.public_repos)}
            ></div>
            <span>{user.public_repos}</span>
          </div>
        </section>

        <section>
          <h5>Gists:</h5>
          <div>
            <div
              className="gists_bar bar"
              style={barWidth(user.public_gists)}
            ></div>
            <span>{user.public_gists}</span>
          </div>
        </section>

        <section>
          <h5>Followers:</h5>
          <div>
            <div
              className="fans_bar bar"
              style={barWidth(user.followers)}
            ></div>
            <span>{user.followers}</span>
          </div>
        </section>

        <section>
          <h5>Following:</h5>
          <div>
            <div
              className="idols_bar bar"
              style={barWidth(user.following)}
            ></div>
            <span>{user.following}</span>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Bio;
