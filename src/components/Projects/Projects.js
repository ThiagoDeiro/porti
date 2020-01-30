import React from 'react'
import './Projects.css'
import projectRuby from './../../Images/projectRuby.png'
import todolist1 from './../../Images/todolist2.png'
import mealpicker from './../../Images/mealpicker.png'
import {   FaCode , FaLink} from 'react-icons/fa';
import {FaJsSquare } from 'react-icons/fa';
export default class Projects extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        projects: [
            {
              title: "RdFlix",
              photo: require( './../../Images/projectRuby.png' ),
              description: "Web App to search for your favourite movies",
              demo:"https://gaseifx02-project2.herokuapp.com/",
              code:"https://github.com/ThiagoDeiro/gaseifx02-project2",
              tech:"Ruby on rails, CSS"
            }, 
           {
              title: "Meal-Picker",
              photo:require( './../../Images/mealpicker.png'),
              description: "Spinn the wheal to find the best restaurents in Sydney",
              demo:"https://thiagodeiro.github.io/project-meal-picker/",
              code:"https://github.com/ThiagoDeiro/project-meal-picker",
              tech:"React aplication with Rails Backend,CSS,Bootstrap"
            },
            {
                title: "Todos",
                photo: require('./../../Images/todolist2.png' ),
                description: "ToDo list is a simple app to get your daily tasks in order not to miss anything.",
                demo:"https://thiagodeiro.github.io/gaseifx01-project01/",
                code:"https://github.com/ThiagoDeiro/gaseifx01-project01",
                tech:"JavaScript,Jquery, CSS"
              }, 
           
            
              
        ]
        }
    }
    render(){
        const cards = this.state.projects.map(p => 
            <div class="card-container">
                <div className="divPic">
                    <img src={p.photo}  className="image" />
                </div>
                <div class="overlay">
                  <div class="text">{p.title}</div>
                  <div class="ImgContent"><p>{p.description}<br/><span className="techName">{p.tech}</span></p></div>
                  <div className="imgSocial">
                    <a href={p.demo} class="ImgIcon" target="_blank" rel="noopener noreferrer"><FaLink></FaLink></a>
                    <a href={p.code} class="ImgIcon" target="_blank" rel="noopener noreferrer"><FaCode></FaCode></a>
                  </div>
                </div>
             </div>)
        return(
            <div className='projectWrapper'>
            <header class="project-box">
              <div className='project-textBox'>
                <h1 className="project-name">Projects</h1>
                <div className="project-text">{cards}</div>
              </div>
            </header>
    </div>
        )
    }
}