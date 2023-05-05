import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../state/provider'
import css from './NavBar.module.css'
import './Navbar.css'
import Logo from '../assests/logo2.png'
import { useState, useEffect } from 'react'





const Navbar = () => {

  const [navbar, setNavbar] = useState(false);

  const [{ profile, cartproductf_uncomplit }, dispatch] = useGlobalState()
  // console.log(cartproductf_uncomplit, "$$$444uncomplit cart");
  let cart_product_length = 0;
  if (cartproductf_uncomplit !== null) {
    cart_product_length = cartproductf_uncomplit?.cartproduct?.length
  } else {
    cart_product_length = 0;
  }


  const logoutbutton = () => {
    window.localStorage.clear()
    dispatch({
        type: "ADD_PROFILE",
        profile: null
    })
    window.location.href = "/"
}


const changeBackground = () => {
  if(window.scrollY >=2){
    setNavbar(true);
  }else{
    setNavbar(false);
  }
}
window.addEventListener('scroll', changeBackground);


  return (
    <nav className={navbar ? 'navbar navbar-expand-lg fixed-top bg-dark NavBar active' : 'navbar navbar-expand-lg NavBar'}>
      <div className={css.container}>

        <div className={css.logo}>
            <img src={Logo} alt="" />
          </div>
        </div> 
      <Link className="navbar-brand " to="/">Magic Shop</Link>
      <button className="navbar-toggler custom-btn-blue" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto" >
          {
            profile !== null ?
              (
                <>
                  <li class="nav-item active">
                    <Link to="/cart" class="btn custom-btn-orange">
                    <i class="fas fa-cart-plus"></i>
                      <span>({cart_product_length})</span>
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link custom-btn-blue" to="/profile"><span>Profile</span></Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link custom-btn-blue" to="/"><span>Contact</span></Link>
                  </li>
                  <li className="nav-item active">
                  <Link onClick={logoutbutton} class="nav-link custom-btn-red"><span>Logout</span></Link>
                  </li>
                </>
              )
              :
              (
                <>
                  <li className="nav-item active ">
                    <Link className="nav-link active custom-btn-blue" to="/login"><span>Login</span></Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link active custom-btn-blue" to="/register"><span>Register</span></Link>
                  </li>
                </>
              )

          }

        </ul>
      </div>
    </nav>
  )
}

export default Navbar
