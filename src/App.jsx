import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Programs from './Components/Navbar/Programs/Programs'
import Title from './Components/Navbar/Title/Title'
import About from './Components/Navbar/About/About'
import Campus from './Components/Navbar/Campus/Campus'
import Testimonials from './Components/Navbar/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
const App = () => {

  const [playState,setPlayState] = useState(false);



  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What We Offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState}setPlayState={setPlayState}/>
    </div>
  )
}

export default App
