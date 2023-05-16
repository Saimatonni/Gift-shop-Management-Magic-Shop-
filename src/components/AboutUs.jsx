import Axios from 'axios'
import React, { useState } from 'react'
import './AboutUs.css'
import sparkles from '../assests/white-sparkle-png-transparent-29.png'
import image_left from '../assests/about_Us_tt.jpg'
import image_right from '../assests/about_us_sk.jpg'

const AboutUs = () => {


  return (
    <div className="container">
      
    <div className="about-us">
        <div className="section1">
            <div className="left_image_container">
            <img src={image_left} alt="Left Image" />
            </div>
            <div className="left_text_container">
            <h2>Tasfia Tabassum</h2>
            <p>3rd Year Computer Science Student at University of Dhaka.</p>
            </div>
        </div>
        <div className="section2">
            
            <div className="right_text_container">
            <h2>Saima Akter</h2>
            <p>3rd Year Computer Science Student at University of Dhaka.</p>
            </div>
            <div className="right_image_container">
            <img src={image_right} alt="Right Image" />
            </div>
        </div>
        </div>
    

            <div className="sparklePP">
                <img src={sparkles} />
                <img src={sparkles} />
                <img src={sparkles} />
                <img src={sparkles} />
                <img src={sparkles} />
                <img src={sparkles} />
                <img src={sparkles} />
            </div>
            

    </div>
  )
}

export default AboutUs
