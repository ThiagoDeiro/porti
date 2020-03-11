import React from "react";
import "./Projects.css";
// import projectRuby from './../../Images/projectRuby.png'
// import todolist1 from './../../Images/todolist2.png'
// import mealpicker from './../../Images/mealpicker.png'
import { FaCode, FaLink } from "react-icons/fa";

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: "p1",
          title: "RdFlix",
          photo: require("./../../Images/projectRuby.png"),
          description: "Web App to search for your favourite movies",
          demo: "https://gaseifx02-project2.herokuapp.com/",
          code: "https://github.com/ThiagoDeiro/gaseifx02-project2",
          tech:
            "Ruby on rails, CSS, Bootstrap and MovieDB API,Heroku for deployment,GitHub for version control."
        },
        {
          id: "p4",
          title: "Mockedin",
          photo: require("./../../Images/mockdim/project3.png"),
          description: "Mock up version of LinkedIn, but with a little twist.",
          demo: "https://mockedin.herokuapp.com/",
          code: "https://github.com/ThiagoDeiro/project-3",
          tech:
            "JavaScript/React , Node/Express.js, MongoDB/Mongoose, S3/AWS,Heroku for deployment, GitHub for version control."
        },
        {
          id: "p2",
          title: "Meal-Picker",
          photo: require("./../../Images/mealpicker.png"),
          description: "Spinn the wheal to find the best restaurents in Sydney",
          demo: "https://thiagodeiro.github.io/project-meal-picker/",
          code: "https://github.com/ThiagoDeiro/project-meal-picker",
          tech:
            "React aplication with Rails Backend,CSS,Bootstrap and Zumato API, GitHub for version control."
        },
        {
          id: "p3",
          title: "Todos",
          photo: require("./../../Images/todolist2.png"),
          description:
            "ToDo list is a simple app to get your daily tasks in order not to miss anything.",
          demo: "https://thiagodeiro.github.io/gaseifx01-project01/",
          code: "https://github.com/ThiagoDeiro/gaseifx01-project01",
          tech: "JavaScript,Jquery, CSS, GitHub for version control."
        }
      ]
    };
  }
  render() {
    const cards = this.state.projects.map(p => (
      <div className="card" key={p.id}>
        <h1 className="title">{p.title}</h1>
        <div className="imgCont">
          <img className="project-img" src={p.photo} alt={p.title} />
          <div className="caption">
            {" "}
            <a
              href={p.demo}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink></FaLink>
            </a>
            |{" "}
            <a
              href={p.code}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCode></FaCode>
            </a>
          </div>
          <div className="desc">
            <p className="paragraph">{p.description}</p>
            <p className="paragraph">Tech Stack:</p>
            <p className="paragraph">{p.tech}</p>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="projectWrapper">
        <h1 className="page-title">Projects</h1>
        <div className="sub">{cards}</div>
      </div>
    );
  }
}
