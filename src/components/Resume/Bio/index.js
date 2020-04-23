import React from 'react';
import "./style.scss";

const Bio = ({ user }) => {
  return (
    <div className="bio">
      <h2>{user.name}</h2>
    </div>
  )
}
export default Bio;