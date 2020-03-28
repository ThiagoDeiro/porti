import React from "react";
import "./About.css";

import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaGitAlt
} from "react-icons/fa";
export default class About extends React.Component {
  render() {
    return (
      <div className="about-main">
        <img alt="" className="user"></img>
        <h1 className="about-name">About me</h1>
        <div className="about-text">
          <p>
            I'm an enthusiastic front-end developer with a passion for building
            responsive design and user interfaces.
          </p>
          <br />
          <p>
            Recently graduated from a Software Engineering course, I am looking
            for a company where I can be challenged whilst learning and growing.
          </p>
        </div>

        <div className="skill-chart">
          <FaHtml5 className="icons htm" />

          <FaCss3Alt className="icons cs" />

          <FaJs className="icons js" />

          <FaReact className="icons reac" />

          <FaNodeJs className="icons node" />

          <FaGitAlt className="icons git" />
        </div>
      </div>
    );
  }
}
