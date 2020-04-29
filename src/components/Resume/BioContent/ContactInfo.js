import React from "react";

const ContactInfo = ({ user }) => {
  return (
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
          <i className="fas fa-times-circle"></i> Not looking for job
        </h3>
      )}

      {user.company !== null && user.company !== "" && (
        <h3 className="company">
          <i className="fas fa-building"></i> {user.company}
        </h3>
      )}
    </div>
  );
};

export default ContactInfo;
