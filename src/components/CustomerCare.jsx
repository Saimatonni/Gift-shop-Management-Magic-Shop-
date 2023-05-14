import Axios from 'axios'
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import './CustomerCare.css'
import './contacts'
import sparkles from '../assests/white-sparkle-png-transparent-29.png'
// import image_left from '../assests/about_Us_tt.jpg'
// import image_right from '../assests/about_us_sk.jpg'

const CustomerCare = () => {


  return (
    <div className="container">
      
    <div className="Customer_care_con">
        <div className="section1">
            <div className="left1_text_container">
            <h2>- Help Center</h2>
            <Link to = "/contact"><h6>Contact Us</h6></Link>
            </div>
        </div>

        <div className="section2">
            <div className="right1_text_container">
            <h2>- How to Buy</h2>
            <p>Cash on delivery. In future we are aiming to provide our customers the facility of paying with cards or via bank money transfer.</p>
            </div>
        </div>

        <div className="section3">
            <div className="left2_text_container">
            <h2>- Corporate & Bulk Purchasing</h2>
            <p>Although our shop is primarily designed for small businesses, we are happy to supply products in bulk quantities. Please note that due to our small size, delivery times for bulk orders may be slower than usual. Contact us for more information on corporate and bulk purchasing options.</p>
            </div>
        </div>

        <div className="section4">
            <div className="right2_text_container">
            <h2>- Returns & Refunds</h2>
            <p>We want you to be happy with your purchase. If for any reason you're not satisfied, we offer a 24-hour window for order cancellations. Beyond that time frame, we won't be able to accommodate any cancellations. We also have a refund policy of 5% if you decide to return your purchase within 14 days of receiving it. Please contact us if you have any questions or concerns about our returns and refunds policy.</p>
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

export default CustomerCare
