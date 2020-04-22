import React from "react";
import "./style.scss";

export default function Resume({ user }) {
  if (!user) {
    return <div className="resume">Loading...</div>;
  } else if (user.message === "Not Found") {
    return <div className="resume">User not found</div>;
  } else {
    return <div className="resume">{user.name}</div>;
  }
}
