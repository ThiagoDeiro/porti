import React from 'react'
import './About.css'
export default class About extends React.Component{
    render(){
        return(
            <div className='aboutyWrapper'>
            <header class="about-box">
              <div className='about-textBox'>
              <div className='img-box'>
                     <img alt='' class='user'></img>
                </div>
                <h1 className="about-name">About me</h1>
                <p className="about-text">I am a Junior Front-End Developer with a background in law and customer service. I came upon coding with a head full of inspiration, having seen my previous workplaces transformed by web-based technologies.
                After school, I found myself going down the law path to follow my family's footsteps, but I never gave up on my interest and continued taking online courses, attending events and meetups, and kept up-to-date with the latest technology trends.
                I am looking to join an innovative organisation that fosters employee growth and has a great team culture. I believe that with my skills, my adaptability and my people-focused work ethic, I will be an asset to your team.
                </p>
              </div>
            </header>
    </div>
        )
    }
}