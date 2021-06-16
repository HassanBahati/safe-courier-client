import React from 'react'

export default function Navbar() {
    return (
        <div>
           
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#"
            ><img id="logo" src="" alt="" />
            <h2>Safe Courier</h2></a
          >
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-info"
                  aria-current="page"
                  href="#"
                  >Home</a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link text-info" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-info" href="#">Help</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-info" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-info" href="#">
                  <button className="btn btn-outline-info btn-sm my-0">
                    Login
                  </button></a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

        </div>
    )
}
