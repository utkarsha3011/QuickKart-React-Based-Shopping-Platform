import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import model1 from '../Assets/model1.png'
import arrow from '../Assets/arrow.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left mt-5">
        <h2>Discover Our <br/> latest collections</h2>
        
        <div className=''>
            <div className="hero-hand-icon">
                <p className='mt-4'><b>NEW ARRIVALS</b>
            <img src={hand_icon} alt=""/></p>
             <p>FOR MEN, WOMEN & KIDS</p>
                {/* <p>new</p> */}
                {/* <img src={hand_icon} alt="" height={100}/> */}
            </div>
            
            
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
