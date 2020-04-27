import React from "react";
import { Button } from "../Button/index";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { turnIntoX } from "../../TopBar/index";
import "./style.scss";

export const Searchbar = ({ handleInput }) => {
  // FontAwesome icon components
  const ex = <FontAwesomeIcon icon={faTimes} />;
  const search = <FontAwesomeIcon icon={faSearch} />;

  // useForm hook elements
  const { register, handleSubmit, errors } = useForm();

  // fetching all needed info about GitHub user
  const fetchUser = (data) => {
    fetch(`https://api.github.com/users/${data.username}`)
      .then((result) => result.json())
      .then((fetchedUser) => {
        console.log(fetchedUser);
        handleInput(fetchedUser);
        turnIntoX();
      });
  };

  // validate name to only contain alphanumeric signs, hyphens and underscores
  const validateUsername = (value) => {
    if (/^[a-zA-Z0-9_-]+$/.test(value)) {
      return true;
    }
    return false;
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit(fetchUser)}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        name="username"
        ref={register({ required: true, validate: validateUsername })}
      ></input>
      {errors.username && errors.username.type === "required" && (
        <p>
          <span>{ex}</span> Username is required
        </p>
      )}
      {errors.username && errors.username.type === "validate" && (
        <p>
          <span>{ex}</span> Username can contain only alphanumeric symbols with
          hyphens and underscores
        </p>
      )}
      <Button className="search-button" content={search} />
    </form>
  );
};
