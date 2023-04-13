import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../state/provider'

const Navbar = () => {
  const [{ profile }, { }] = useGlobalState()
  //console.log(profile, "$$this is navbar profile")
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
                  <li className="nav-item active">
                    <Link className="nav-link" to="/profile">Profile</Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="#">Logout</Link>
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
