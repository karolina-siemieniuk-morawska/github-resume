import React from "react";
import "../../assets/sass/Timeline.scss";

const Timeline = ({ user, repos }) => {
  return (
    <div className="timeline">
      <h2>{user.created_at}</h2>
      {/* <h2>{repos.length}</h2> */}
    </div>
  );
};

export default Timeline;
