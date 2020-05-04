import React from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Hamburger from "./Hamburger";
import "../assets/sass/Topbar.scss";

export default function Topbar({ handleUser }) {
  return (
    <div className="topbar">
      <Logo />
      <Hamburger />
      <Searchbar handleUser={handleUser} />
    </div>
  );
}
