import React from "react";

import GitHubIcon from "@icons/github__icon.svg";
import LinkedinIcon from "@icons/linkedin__icon.svg";
import TwitterIcon from "@icons/twitter__icon.svg";

import "./style/BackgroundPanel.scss";

const BackgroundPanel = () => {
  return (
    <div className="background-panel">
      <a
        href="https://twitter.com/heladit000"
        className="background-panel__link"
      >
        <TwitterIcon className="background-panel__link--icon" />
      </a>
      <a
        href="https://github.com/Heladit000/Rodtasks"
        className="background-panel__link"
      >
        <GitHubIcon className="background-panel__link--icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/nicolas-esteban-prieto-sarmiento-330a51222/"
        className="background-panel__link"
      >
        <LinkedinIcon className="background-panel__link--icon" />
      </a>
    </div>
  );
};

export default BackgroundPanel;
