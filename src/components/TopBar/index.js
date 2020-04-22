import React from "react";
import Logo from "../Blocks/Logo/index";
import { Searchbar } from "../Blocks/Searchbar/index";
import "./style.scss";

export const TopBar = ({ handleInput }) => {
  return (
    <div className="topbar">
      <Logo />
      <Searchbar handleInput={handleInput} />
    </div>
  );
};
