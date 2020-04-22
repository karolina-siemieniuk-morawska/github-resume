import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

export const Searchbar = ({ handleInput }) => {
  const element = <FontAwesomeIcon icon={faTimes} />;

  const { register, handleSubmit, errors } = useForm();

  const fetchUser = (data) => {
    fetch(`https://api.github.com/users/${data.username}`)
      .then((result) => result.json())
      .then((fetchedUser) => {
        console.log(fetchedUser);
        handleInput(fetchedUser);
      });
  };

  const validateUsername = (value) => {
    if (/^[a-zA-Z0-9_-]+$/.test(value)) {
      return true;
    }
    return false;
  };

  return (
    <form onSubmit={handleSubmit(fetchUser)}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        name="username"
        ref={register({ required: true, validate: validateUsername })}
      ></input>
      {errors.username && errors.username.type === "required" && (
        <p>
          <span>{element}</span> Username is required
        </p>
      )}
      {errors.username && errors.username.type === "validate" && (
        <p>
          <span>{element}</span> Username can contain only alphanumeric symbols
          with hyphens and underscores
        </p>
      )}
      <input type="submit" value="Search"></input>
    </form>
  );
};
