import React from "react";
import "./Navegation.css";
import {
  FaGithubSquare,
  FaLinkedin,
  FaFileDownload,
  FaEnvelopeSquare
} from "react-icons/fa";
import { Link } from "@reach/router";
import resume from "../resume/ThiagoDeiro-resume.pdf";

export default class Navegation extends React.Component {
  render() {
    return (
      <div className="navBar">
        <div className="menus">
          <Link className="linkNav" to="/porti" style={{ color: "white" }}>
            Home
          </Link>
          |
          <Link className="linkNav" to="/About" style={{ color: "white" }}>
            About
          </Link>
          |
          <Link className="linkNav" to="/Projects" style={{ color: "white" }}>
            Projects
          </Link>
        </div>
        <div className="social">
          <a
            style={{ color: "white" }}
            href="https://github.com/ThiagoDeiro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="socialEle"></FaGithubSquare>
          </a>
          <a
            style={{ color: "white" }}
            href="https://www.linkedin.com/in/thiago-deiro-bb2b49190/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="socialEle"></FaLinkedin>
          </a>
          <a
            style={{ color: "white" }}
            href="mailto:thdeiro@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelopeSquare className="socialEle envelope"></FaEnvelopeSquare>
          </a>
          <a
            style={{ color: "white" }}
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <FaFileDownload className="socialEle"></FaFileDownload>
          </a>
        </div>
      </div>
    );
  }
}
