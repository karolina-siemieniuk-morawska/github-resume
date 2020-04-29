import React from "react";
import "../../assets/sass/Bio.scss";
import NumberData from "./BioContent/NumberData";
import ContactInfo from "./BioContent/ContactInfo";

const Bio = ({ user }) => {
  return (
    <div className="bio">
      <div className="intro">
        <img className="avatar" src={user.avatar_url} alt="avatar" />
        {user.name !== null && user.name !== "" && (
          <h2>
            <a href={user.html_url}>{user.name}</a>
          </h2>
        )}

        <ContactInfo user={user} />

        {user.bio !== null && user.bio !== "" && (
          <h4 className="quote">"{user.bio}"</h4>
        )}
      </div>

      <NumberData user={user} />
    </div>
  );
};
export default Bio;
