import React from 'react'
import "./Head.css"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container f_flex'>
           
            <div className='right row RText'>
            <label>Need Help?</label>
            <span></span>
            
          </div>
          <div className='left row'>
             < i className='fa fa-phone'></i>
             <label> +880017********</label>
             <i className='fa fa-envelope'></i>
             <label> abcd@gmail.com</label>    
             <label>Dhaka</label>
            <label>Bangladesh</label>
            </div> 
        </div>
      </section>
    </>
  )
}

export default Head