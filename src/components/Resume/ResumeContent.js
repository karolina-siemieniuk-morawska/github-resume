import React from 'react';
import Bio from "./Bio/index";
import Timeline from "./Timeline/index";

const ResumeContent = ({ user }) => {
  return (
    <div className="resume-content">
      <Bio user={user} />
      <Timeline user={user} />
    </div>
  )
}

export default ResumeContent;
