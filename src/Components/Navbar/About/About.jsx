import React from 'react'
import './About.css'
import about_img from '../../../assets/about.png'
import play_icon from '../../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div> 
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformative educational journey with our university's comprehensive education programs. 
          Our cutting-edge curriculum is designed to empower students with the knowledge and skills needed to excel
           in the field of education.
        </p>
        <p>With a focus on innovation, hands-on learning, and personalized mentorship, 
          we help students make a meaningful impact in classrooms and schools.
        </p>
        <p>Our diverse range of programs offers the perfect pathway to achieve your goals and 
          unlock your full potential in shaping the future of education.
        </p>

        </div>  
      
    </div>
  )
}

export default About
