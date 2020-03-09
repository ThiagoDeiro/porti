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
        {/* <header className="about-box"> */}
        <div className="about-textBox">
          <div className="img-box">
            <img alt="" className="user"></img>
          </div>
          <h1 className="about-name">About me</h1>
          <span className="about-text">
            <p>
              I'm an enthusiastic front-end developer with a passion for
              building responsive design and user interfaces.
            </p>
            <br />
            <p>
              I came upon coding with a head full of inspiration, having seen my
              previous workplaces transformed by web-based technologies.
            </p>
            <p>
              Recently graduated from a Software Engineering course, I am
              looking for a company where I can be challenged whilst learning
              and growing.
            </p>
          </span>
        </div>

        <div className="skill-chart">
          <FaHtml5 className="icons" style={{ color: "#5F6061" }} />
          {/* rgb(195, 77, 45) */}
          <FaCss3Alt className="icons" style={{ color: "#5F6061" }} />
          {/* rgb(55, 76, 218) */}

          <FaJs className="icons" style={{ color: "#5F6061" }} />
          {/* rgb(235, 221, 61) */}

          <FaReact className="icons" style={{ color: "#5F6061" }} />
          {/* rgb(140, 211, 242) */}

          <FaNodeJs className="icons" style={{ color: "#5F6061" }} />
          {/* rgb(148, 187, 44) */}

          <FaGitAlt className="icons" style={{ color: "#5F6061" }} />
          {/* rgb(216 , 62, 32) */}
        </div>
        {/* </header> */}
      </div>
    );
  }
}
