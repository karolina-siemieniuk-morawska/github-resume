import React from "react";
import Button from "./Button";
import ValidationError from "./ValidationError";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { handleResponsiveMenu } from "../utils/handleResponsiveMenu";
import "../assets/sass/Searchbar.scss";

export default function Searchbar({ setUsername }) {
  // FontAwesome icon component
  const search = <FontAwesomeIcon icon={faSearch} />;

  // useForm hook elements
  const { register, handleSubmit, errors } = useForm();

  // validate name to only contain alphanumeric signs, hyphens and underscores
  const validateUsername = (value) => (/^[a-zA-Z0-9_-]+$/.test(value));

  const onSubmit = (data) => {
    setUsername(data.username);
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
