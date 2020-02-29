import React from 'react'
import './Projects.css'
// import projectRuby from './../../Images/projectRuby.png'
// import todolist1 from './../../Images/todolist2.png'
// import mealpicker from './../../Images/mealpicker.png'
import { FaCode , FaLink} from 'react-icons/fa';

export default class Projects extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        projects: [
            {
              id: 'p1',
              title: "RdFlix",
              photo: require( './../../Images/projectRuby.png' ),
              description: "Web App to search for your favourite movies",
              demo:"https://gaseifx02-project2.herokuapp.com/",
              code:"https://github.com/ThiagoDeiro/gaseifx02-project2",
              tech:"Ruby on rails, CSS, Bootstrap and MovieDB API"
            }, 
           {
              id: 'p2',
              title: "Meal-Picker",
              photo:require( './../../Images/mealpicker.png'),
              description: "Spinn the wheal to find the best restaurents in Sydney",
              demo:"https://thiagodeiro.github.io/project-meal-picker/",
              code:"https://github.com/ThiagoDeiro/project-meal-picker",
              tech:"React aplication with Rails Backend,CSS,Bootstrap and Zumato API"
            },
            { 
                id: 'p3',
                title: "Todos",
                photo: require('./../../Images/todolist2.png' ),
                description: "ToDo list is a simple app to get your daily tasks in order not to miss anything.",
                demo:"https://thiagodeiro.github.io/gaseifx01-project01/",
                code:"https://github.com/ThiagoDeiro/gaseifx01-project01",
                tech:"JavaScript,Jquery, CSS"
              }, 
              {
                id: 'p4',
                title: "Mockedin",
                photo: require('./../../Images/mockdim/project3.png'),
                description: "Mock up version of LinkedIn, but with a little twist. It is supposed to be be used by people who want to update their LinkedIn profile, but they need some review from their HR/Career consultant first..",
                demo:"https://mockedin.herokuapp.com/",
                code:"https://github.com/ThiagoDeiro/project-3",
                tech:"JavaScript/React for front-end, Node/Express.js for back-end,MongoDB/Mongoose for database,S3/AWS for photos upload,Heroku for deployment,GitHub for version control."
              }, 
        ]
        }
    }
    render(){
        const cards = this.state.projects.map(p => 
            <div className="card-container" key={p.id}>
                <div className="divPic">
                    <img src={p.photo}  className="image" alt={p.description} />
                </div>
                <div className="overlay">
                  <div className="text">{p.title}</div>
                    <div className="ImgContent">
                      <span>{p.description}<br/>
                      <span>Tech stack: </span>
                      <br/>
                      <span className="techName">{p.tech}</span>
                      </span>
                    </div>
                    <div className="imgSocial">
                      <a href={p.demo} className="ImgIcon" target="_blank" rel="noopener noreferrer"><FaLink></FaLink></a>
                      <a href={p.code} className="ImgIcon" target="_blank" rel="noopener noreferrer"><FaCode></FaCode></a>
                  </div>
                </div>
             </div>)
        return(
            <div className='projectWrapper'>
            <header className="project-box">
              <div className='project-textBox'>
                <h1 className="project-name">Projects</h1>
                <div className="project-text">{cards}</div>
              </div>
            </header>
    </div>
        )
    }
}