import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import model1 from '../Assets/model1.png'
import arrow from '../Assets/arrow.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Discover Our</h2>
        <h2>latest collections</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" height={100}/>
            </div>
            <p><b>NEW ARRIVALS</b> FOR MEN, WOMEN & KIDS</p>
            
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow} alt="" height={100} />
        </div>
      </div>
      <div className="hero-right">
        <img src={model1} alt="" />
      </div>
    </div>
  )
}

export default Hero
