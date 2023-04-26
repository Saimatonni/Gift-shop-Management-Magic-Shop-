import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../state/provider'

const Navbar = () => {
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

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Magic Shop</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {
            profile !== null ?
              (
                <>
                  <li class="nav-item">
                    <Link to="/cart" class="btn btn-dark">
                      <i class="fas fa-cart-plus"></i>
                      <span>({cart_product_length})</span>
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/profile">Profile</Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Contact</Link>
                  </li>
                  <li className="nav-item active">
                    <Link onClick={logoutbutton} class="nav-link active btn-dark">Logout</Link>
                  </li>
                </>
              )
              :
              (
                <>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/register">Register</Link>
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
