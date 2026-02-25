import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import model1 from '../Assets/model1.png'
import arrow from '../Assets/arrow.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left mt-5">
        <h2>Discover Our </h2><h2 style={{color:'red'}}>Latest Collections</h2>
        
        <div className=''>
            <div className="hero-hand-icon">
                <p className='mt-4 fs-3'><b>NEW ARRIVALS</b> &nbsp;
            <img src={hand_icon} alt=""/> &nbsp;
             FOR MEN, WOMEN & KIDS</p>
            </div>
            
            
        </div>
        <div className="hero-latest-btn">
            <div className='ms-4'>Latest Collection</div>
            <img src={arrow} alt="" height={60} />
        </div>
      </div>
      <div className="hero-right">
        <img src={model1} alt="" />
      </div>
    </div>
  )
}

export default Hero
