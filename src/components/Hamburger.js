import React from "react";
import { handleResponsiveMenu } from "../utils/handleResponsiveMenu";

const Hamburger = () => {
  return (
    <div className="hamburger" onClick={handleResponsiveMenu}>
      <span className="bar-1 ham-bar"></span>
      <span className="bar-2 ham-bar"></span>
      <span className="bar-3 ham-bar"></span>
    </div>
  );
};

export default Hamburger;
