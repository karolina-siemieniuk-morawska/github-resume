import React from "react";
import Button from "./Button";
import ValidationError from "./ValidationError";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { handleResponsiveMenu } from "./Hamburger";
import "../assets/sass/Searchbar.scss";

export default function Searchbar({ handleRepos, handleUser }) {
  // FontAwesome icon component
  const search = <FontAwesomeIcon icon={faSearch} />;

  // useForm hook elements
  const { register, handleSubmit, errors } = useForm();

  // fetching info about GitHub user
  const fetchUser = (data) => {
    fetch(`https://api.github.com/users/${data.username}`)
      .then((result) => result.json())
      .then((fetchedUser) => {
        console.log(fetchedUser);
        handleUser(fetchedUser);
      });
  };

  // fetching info about GitHub user's repositories
  const fetchRepos = (data) => {
    fetch(`https://api.github.com/users/${data.username}/repos`)
      .then((result) => result.json())
      .then((fetchedRepos) => {
        console.log(fetchedRepos);
        handleRepos(fetchedRepos);
      });
  };

  // validate name to only contain alphanumeric signs, hyphens and underscores
  const validateUsername = (value) => {
    if (/^[a-zA-Z0-9_-]+$/.test(value)) {
      return true;
    }
    return false;
  };

  const onSubmit = (data) => {
    fetchUser(data);
    fetchRepos(data);
    handleResponsiveMenu();
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        name="username"
        ref={register({ required: true, validate: validateUsername })}
      ></input>
      {errors.username && errors.username.type === "required" && (
        <ValidationError content=" Username is required" />
      )}
      {errors.username && errors.username.type === "validate" && (
        <ValidationError
          content="Username can contain only alphanumeric symbols with
        hyphens and underscores"
        />
      )}
      <Button className="search-button" content={search} />
    </form>
  );
}
