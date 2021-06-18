import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white fixed-top px-5">
            <h4 className="navbar-brand"><Link to="/"> Safe Courier</Link></h4>
            <ul className="navbar-nav ml-auto">
             
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
               
              </div>
            </ul>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/ask">
                    Help
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/log-in">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
  )
}
