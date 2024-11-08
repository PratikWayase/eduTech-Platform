import React from 'react'
import './hero.css'
import dark_arrow from "../../../assets/dark-arrow.png";

const hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and hands-on experiences needed to excel in the dynamic field of education.
           Through innovative learning and practical engagement, we prepare future leaders to make a meaningful impact in classrooms, schools, and beyond.</p>
        <button className='btn'>Explore more <img src={dark_arrow } alt=""/></button>
      </div>
    </div>
  )
}

export default hero
