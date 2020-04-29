import React from "react";

const NumberData = ({ user }) => {
  const barWidth = (type) => {
    return {
      width: `${type * 2}px`,
    };
  };

  return (
    <div className="number-data">
      <section>
        <h5>Repositories:</h5>
        <div>
          <div
            className="repo_bar bar"
            style={barWidth(user.public_repos)}
          ></div>
          <span className="bar-span">{user.public_repos}</span>
        </div>
      </section>

      <section>
        <h5>Gists:</h5>
        <div>
          <div
            className="gists_bar bar"
            style={barWidth(user.public_gists)}
          ></div>
          <span className="bar-span">{user.public_gists}</span>
        </div>
      </section>

      <section>
        <h5>Followers:</h5>
        <div>
          <div className="fans_bar bar" style={barWidth(user.followers)}></div>
          <span className="bar-span">{user.followers}</span>
        </div>
      </section>

      <section>
        <h5>Following:</h5>
        <div>
          <div className="idols_bar bar" style={barWidth(user.following)}></div>
          <span className="bar-span">{user.following}</span>
        </div>
      </section>
    </div>
  );
};

export default NumberData;
