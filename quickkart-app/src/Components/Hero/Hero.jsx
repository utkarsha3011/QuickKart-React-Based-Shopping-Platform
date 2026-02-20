import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import model1 from '../Assets/model1.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" height={100}/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-button">
            <div>Latest Collection</div>
            {/* <img src={} alt="" /> */}
        </div>
      </div>
      <div className="hero-right">
        <img src={model1} alt="" />
      </div>
    </div>
  )
}

export default Hero
