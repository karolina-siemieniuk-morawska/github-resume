/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';
import "./style.scss";

export default function Footer() {
  const github = <FontAwesomeIcon icon={faGithub} />;
  const fb = <FontAwesomeIcon icon={faFacebook} />;

  return (
    <footer className="footer">
      <div className="am-here"></div>
      <h5>2020 &copy; Karolina Siemieniuk-Morawska</h5>
      <div className="sm-logos">
        <a target="_blank" href="https://github.com/karolina-siemieniuk-morawska">
          {github}
        </a>
        <a target="_blank" href="https://www.facebook.com/karolina.justynska">
          {fb}
        </a>
      </div>
    </footer>
  )
}
